import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import User from "../../Shared/User";
import { useQuery } from "@tanstack/react-query";


const CheckOutForm = ({ id }) => {
    const timeStamp = new Date();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const currentUser = User();
    const navigate = useNavigate();


    const { data: bought = [] } = useQuery({
        queryKey: ['id', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bought/payment/${id}`);
            return res.data;
        }
    })
    console.log(bought)
    const price = bought.offerPrice

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    },
        [axiosSecure, price]
    )

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: currentUser?.email || 'anonymous',
                    name: currentUser?.name || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    transactionId: paymentIntent.id,
                    createdAt: timeStamp
                }

                const paymentData = await axiosSecure.patch(`/bought/${id}`, payment);
                console.log(paymentData.data)
                if (paymentData.data.modifiedCount > 0) {
                    // show success popup
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${bought.name} is updated to the Bought.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/user/property')
                }

                // const res = await axiosSecure.post('/payments', payment);
                // console.log('payment saved', res.data);
                // refetch();
                // if (res.data?.paymentResult?.insertedId) {
                //     Swal.fire({
                //         position: "top-end",
                //         icon: "success",
                //         title: "Thank you for the taka paisa",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                //     navigate('/dashboard/paymentHistory')
                // }

            }
        }


    }
    return (
        <div className="w-11/12 mx-auto bg-fuchsia-600 p-8 rounded-md">
            <form onSubmit={handleSubmit} className="w-full">
                <CardElement
                    className="bg-white p-4 gap-6 rounded-md"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-green-400 hover:bg-green-600 my-4 px-8 text-2xl" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-white">{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckOutForm;