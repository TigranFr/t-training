import { api } from "./api";

export const exerciseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createExercise: builder.mutation({
      query: (exercise) => ({
        method: 'POST',
        url: '/Exercises',
        body: exercise,
      }),
    invalidatesTags: ['Exercise'],
    }),

    deleteExercise: builder.mutation({
      query: (exerciseID) => ({
        method: "DELETE",
        url:`/Exercises/${exerciseID}`
      }),
      invalidatesTags : ['Exercise']
    }),
  }),
});

export const { useCreateExerciseMutation, useDeleteExerciseMutation } = exerciseApi;
