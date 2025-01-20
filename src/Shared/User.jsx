import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const User = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [currentUser, setCurrentUser]= useState({})
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        enabled: !!user,
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            console.log(res)
            const d = res.data.find((u) => u.email === user?.email);
            setCurrentUser(d)
            return res.data;
        }
    })
    return currentUser;
};

export default User;