import axios from "axios";
import { API_URL } from "../constants";

export const apiService = {
    post: async <T>(url: string, data: any = {}) => {
        return await axios.post<T>(`${API_URL}${url}`, data, {
            withCredentials: true,
        });
    },

    get: async <T>(url: string) => {
        return await axios.get<T>(`${API_URL}${url}`, {
            withCredentials: true,
        });
    },

    delete: async (url: string) => {
        await axios.delete(`${API_URL}${url}`, { withCredentials: true });
    },

    upload: async <T>(url: string, file: File | null) => {
        const formData = new FormData();
        formData.append("userFile", file!);

        return await axios.post<T>(`${API_URL}${url}`, formData, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
};
