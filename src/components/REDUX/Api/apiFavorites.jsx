import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:4200'

export const apiFavorites = createApi({
  reducerPath: 'apiFavorites',
  tagTypes: ['Favorites'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getFavorites: builder.query({
      query: () => '/Favorites',
      providesTags: () => [
        {
          type: 'Favorites',
        },
      ],
    }),
  }),
});

export const { useGetFavoritesQuery } = apiFavorites;