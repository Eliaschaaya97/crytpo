import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com", // Fixed typo
  "X-RapidAPI-Key": "a82b230502msh6bf4f6a4da95f99p182676jsne3e2f43bb7c8",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
      // Optional error handling
      errorHandlung: (error) => {
        console.error("Error fetching cryptos:", error);
        // You can dispatch other actions or display error messages here
      },
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
