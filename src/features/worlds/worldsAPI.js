import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const worldsApi = createApi({
  reducerPath: 'worldsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1001/' }),
  endpoints: (builder) => ({
    getWorlds: builder.query({
      query: () => `worlds`,
    }),
    getWorld: builder.query({
      query: (id) => `worlds/${id}`,
    }),
    getWorldBeats: builder.query({
      query: (id) => `worlds/${id}/beats`,
    }),
    getWorldArt: builder.query({
      query: (id) => `worlds/${id}/art`
    }),
    getWorldVideos: builder.query({
      query: (id) => `worlds/${id}/videos`
    })
  }),
})

export const {
    useGetWorldsQuery,
    useGetWorldQuery,
    useGetWorldBeatsQuery,
    useGetWorldArtQuery,
    useGetWorldVideosQuery
} = worldsApi