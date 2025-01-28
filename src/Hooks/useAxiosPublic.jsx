import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://b10a12-server-side-anamul-hoque37.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

// {https://b10a12-server-side-anamul-hoque37.vercel1.app}
export default useAxiosPublic;