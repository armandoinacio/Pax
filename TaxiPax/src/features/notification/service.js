import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prepareHeaders } from '../../store/middlewares/prepareHeaders';
import { ApplicationProperties } from '../../application.properties';
export const notificationApi = createApi({
    reducerPath: 'notification',
    baseQuery: fetchBaseQuery({
      baseUrl: ApplicationProperties.baseUrl,
      prepareHeaders,
    }),
    endpoints: (builder) => ({
   
      getNotification: builder.query({
        query: (id) => ({
          url: `/notification/get/${id}`,
          method: 'GET',
        }),
      }),
      getNotiQuantity: builder.query({
        query: (id) => ({
          url: `/notification/getQuantity`,
          method: 'GET',
        }),
      }),
    }),
  });
  
  export const {
    useGetNotificationQuery,
    useGetNotiQuantityQuery
  } = notificationApi
  