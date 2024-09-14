import { baseApi } from "../../API/baseApi";

const wishListApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        addToWishList: builder.mutation({
            query: (productId) => ({
              method: "POST",
              url: "/addtowishlist",
              body: productId,
            }),
            invalidatesTags: ['wishList']
          }),
          
          removeWishListProduct: builder.mutation({
            query: (productId) => ({
              method: "DELETE",
              url: `/removefromwishlist?id=${productId}`,
            }),
            invalidatesTags: ['wishList'],
          }),
          getAllWishListedItems: builder.query({
            query: () => ({
              url: '/products',
              method: "GET",
            }),
            providesTags: ['wishList']
          }),
          
    })
})

export const { useAddToWishListMutation, useRemoveWishListProductMutation, useGetAllWishListedItemsQuery} = wishListApi;