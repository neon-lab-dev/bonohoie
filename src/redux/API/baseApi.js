import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://bonohomebackend.vercel.app/api/v1',
  credentials: 'include',
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  tagTypes: ['users', 'products'],
  endpoints: () => ({}),
});
