import { api } from "./api";

export const exerciseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createExercise: builder.mutation({
      query: (exercise) => ({
        method: 'POST',
        url: '/exercises',
        body: exercise,
      }),
      invalidatesTags: ['Exercise'],
    }),
  }),
});

export const { useCreateExerciseMutation } = exerciseApi;
