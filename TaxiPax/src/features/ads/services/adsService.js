import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeaders } from '../../../store/middlewares/prepareHeaders';
import { ApplicationProperties } from '../../../application.properties';

export const adsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: (builder) => ({  
    getAdsByStatus: builder.query({
      query: (status) => ({
        url: `/getAdsByStatus/1`,
        method: 'GET',     
      }),
    }),
 
  }),
});

export const {
    useGetAdsByStatusQuery
} = adsApi;
