import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeaders } from '../../../store/middlewares/prepareHeaders';
import { ApplicationProperties } from '../../../application.properties';

export const atmApi = createApi({
  reducerPath: 'atmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    getAtmAll: builder.query({
      query: () => '/atms/',
      method: 'GET',
    }),
    getAtmsByStreet: builder.query({
      query: (id) => ({
        url:`/atms/ByStreet/${id}`,
        method: 'GET',
      })
   
    }),
    getAtmsByMunicipe: builder.query({
      query: (id) => ({
        url:`/atms/ByMunicipe/${id}`,
        method: 'GET',
      })
   
    }),
    getAtmCategoryAll: builder.query({
      query: () => '/atm_categories',
    }),
    getMunicipeAll: builder.query({
      query: () => '/municipe/',
    }),
    getProvinceAll: builder.query({
      query: () => '/province/',
    }),
    getAdsByStatus: builder.query({
      query: () => ({
        url: '/getAdsByStatus/1',
        method: 'GET',     
      }),
    }),
  }),
});

export const {useGetAtmAllQuery,useGetAtmCategoryAllQuery,useGetAtmsByStreetQuery ,useGetProvinceAllQuery,useGetAtmsByMunicipeQuery, useGetAdsByStatusQuery} = atmApi;
