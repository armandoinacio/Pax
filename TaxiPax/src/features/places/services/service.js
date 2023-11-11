import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeaders } from '../../../store/middlewares/prepareHeaders';
import { ApplicationProperties } from '../../../application.properties';

export const placesApi = createApi({
  reducerPath: 'places',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    getStreetAll: builder.query({
      query: () => ({
        url: `/street/`,
        method: 'GET',
      }),
    }),
    getStreetById: builder.query({
      query: (id) => ({
        url: `/streetById/${id}`,
        method: 'GET',
      }),
    }),
    getStreetByMunicipe: builder.query({
      query: (id) => ({
        url: `/streetByMunicipe/${id}`,
        method: 'GET',
      }),
    }),
    getMunicipeAll:builder.query({
      query: () => ({
        url: `/municipe/`,
        method: 'GET',
      }),
    }),
    getMunicipeById: builder.query({
      query: (id) => ({
        url: `/municipeById/${id}`,
        method: 'GET',
      }),
    }),
    getMunicipeByProvince: builder.query({
      query: (id) => ({
        url: `/municipeByProvince/${id}`,
        method: 'GET',
      }),
    }),
    getLuandaMunicipe: builder.query({
      query: (id) => ({
        url: `/municipeByProvince/5`,
        method: 'GET',
      }),
    }),
    getProvinceAll: builder.query({
      query: () => ({
        url: `/province/`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
     useGetStreetAllQuery,
     useGetMunicipeAllQuery,
     useGetProvinceAllQuery,
     useGetStreetByIdQuery,
     useGetStreetByMunicipeQuery,
     useGetMunicipeByIdQuery,
     useGetMunicipeByProvinceQuery,
     useGetLuandaMunicipeQuery
   
} = placesApi
