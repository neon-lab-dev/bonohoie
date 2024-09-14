import { baseApi } from "../../API/baseApi";

const freebiesApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllFreebies: builder.query({
            query : () => ({
                url : '/freebies',
                method : "GET",
            }),
            providesTags : ["freebies"]
        }),

        // getSingleProduct: builder.query({
        //     query : (id) => ({
        //         url : `/product/${id}`,
        //         method : "GET",
        //     }),
        //     providesTags : ["freebies"]
        // }),
    })
})

export const { useGetAllFreebiesQuery} = freebiesApi;