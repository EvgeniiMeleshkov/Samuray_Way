import axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
    }
})


export const userApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(res => res.data)
    },
    unFollow: (id: number) => {
        return instance.delete(`follow/${id}`)
    },
    follow: (id: number) => {
        return instance.post(`follow/${id}`, {})
    }
}