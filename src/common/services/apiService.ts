import axios, { AxiosResponse } from "axios";

type ApiService = {
    post<T>(url: string, data: any): AxiosResponse<T>;
    get<T>(url: string): AxiosResponse<T>;
    delete(url: string): void;
};

export const apiService = {
    post: async <T>(url: string, data: any = {}) => {
        return await axios.post<T>(url, data, { withCredentials: true });
    },

    get: async <T>(url: string) => {
        return await axios.get<T>(url, { withCredentials: true });
    },

    delete: async (url: string) => {
        await axios.delete(url, { withCredentials: true });
    },
};
