import { apiFavorites } from "./apiFavorites";

export const favoritesApi = apiFavorites.injectEndpoints({
    endpoints : (builder) => ({
        addFavorites: builder.mutation({
            query: (exercise) => ({
              method: 'POST',
              url: '/Favorites',
              body: exercise,
            }),
          invalidatesTags: ['Favorites'],
          }),
        deleteFavorites : builder.mutation({
            query: (favoriteID ) => ({
                method : 'DELETE',
                url: `/Favorites/${favoriteID}`
            }),
            invalidatesTags : ['Favorites',]
        })
    })
})


export const {useAddFavoritesMutation , useDeleteFavoritesMutation} = favoritesApi;
