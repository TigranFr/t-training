import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:4100'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Exercise'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getExercises: builder.query({
      query: () => '/Exercises',
      providesTags: () => [
        {
          type: 'Exercise',
        },
      ],
    }),
  }),
});

export const { useGetExercisesQuery } = api;