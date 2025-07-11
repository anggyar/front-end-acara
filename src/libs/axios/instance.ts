import { environment } from "@/config/environtment";
import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface CustomSession extends Session {
    accessToken?: string;
}

const headers = {
    "Content-Type": "application/json",
};
// Membuat axios instance
const instance = axios.create({
    baseURL: environment.API_URL,
    headers,
    timeout: 60 * 1000,
});

// Interceptor digunakan untuk mengintersep atau menahan atau menganulir sementara
// Digunakan untuk check error dan session
// *UNTUK REQUEST
instance.interceptors.request.use(
    async (request) => {
        // Kalau sudah login
        const session: CustomSession | null = await getSession();
        if (session && session.accessToken) {
            request.headers.Authorization = `Bearer ${session.accessToken}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// * UNTUK RESPONSE
instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default instance;
