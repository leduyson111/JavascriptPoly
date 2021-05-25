import { axiosClient } from "./axiosClient";

const contactAPI = {

    getAll() {
        const url = `/contact`;
        return axiosClient.get(url);
    },

    get(id) {
        const url = `/contact`;
        return axiosClient.get(url);
    },
    remove(id) {

        const url = `/contact/${id}`;
        return axiosClient.delete(url);
    },
    add(contact) {
        const url = `/contact`;
        return axiosClient.post(url, contact);

    },


}
export default contactAPI;