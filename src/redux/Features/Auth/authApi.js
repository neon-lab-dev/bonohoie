import { baseApi } from "../../API/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["users"]
    }),

    signup: builder.mutation({
      query: (userInfo) => ({
        method: "POST",
        url: "/register",
        body: userInfo,
      }),
      invalidatesTags: ["users"]
    }),

    getMe: builder.query({
      query: () => ({
        method: "GET",
        url: "/me",
      }),
      providesTags: ["users"]
    }),

    updateProfile: builder.mutation({
      query: (profileUpdatedData) => ({
        method: "PUT",
        url: `/me/update`,
        body: profileUpdatedData,
      }),
      invalidatesTags: ["users"]
    }),
    

  }),
});

export const { useLoginMutation, useSignupMutation, useGetMeQuery, useUpdateProfileMutation } = authApi;
