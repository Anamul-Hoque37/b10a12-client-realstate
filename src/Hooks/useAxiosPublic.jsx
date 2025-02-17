import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://realstate-delta-eight.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};
// {http://localhost1:5000/}
// {https://b10a12-server-side-anamul-hoque37.vercel1.app}
export default useAxiosPublic;