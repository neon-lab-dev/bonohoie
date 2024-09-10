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
    })
})

export const { useGetAllProductsQuery} = productApi;