import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const API_URL = 'http://localhost:4300'
export const apiHistory = createApi({
    reducerPath: 'apiHistory',
    tagTypes: ['History'],
    baseQuery : fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getHistory: builder.query({
            query: () => '/History',
            providesTags: () => [
                {
                    type:'History'
                }
            ],
        }),
        addToHistory: builder.mutation({
          query: (item) => ({
            url : '/History',
            method: 'POST',
            body: item,
          }),
          invalidatesTags: ['History'],
        }),
        deleteFromHistory : builder.mutation({
            query:(itemID) => ({
                url: `/History/${itemID}`,
                method: "DELETE",
            }),
            invalidatesTags : ['History']
        })
    }),
});

export const {useGetHistoryQuery , useAddToHistoryMutation , useDeleteFromHistoryMutation} = apiHistory