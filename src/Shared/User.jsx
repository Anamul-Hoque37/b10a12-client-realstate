import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const User = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email)
    const axiosSecure = useAxiosSecure();
    const { data: currentUser = [] } = useQuery({
        queryKey: ['user', user],
        enabled: !!user,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?user=${user?.email}`);
            // const d = res.data.find((u) => u.email === user?.email);
            console.log(res)
            return res.data;
        }
    })
    console.log(currentUser)
    return currentUser;
};

export default User;