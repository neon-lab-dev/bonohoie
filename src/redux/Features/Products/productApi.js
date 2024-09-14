import { baseApi } from "../../API/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllProducts: builder.query({
            query : () => ({
                url : '/products',
                method : "GET",
            }),
            providesTags : ["products"]
        }),

        getSingleProduct: builder.query({
            query : (id) => ({
                url : `/product/${id}`,
                method : "GET",
            }),
            providesTags : ["products"]
        }),
    })
})

export const { useGetAllProductsQuery, useGetSingleProductQuery} = productApi;