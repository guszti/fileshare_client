import axios, { AxiosResponse } from "axios";
import { API_URL } from "../constants";

type ApiService = {
    post<T>(url: string, data: any): AxiosResponse<T>;
    get<T>(url: string): AxiosResponse<T>;
    delete(url: string): void;
};

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
};
