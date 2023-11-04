import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Cocktails from '../components/Cocktails';
import SearchBar from '../components/SearchBar'

const searchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

import { useQuery } from '@tanstack/react-query';

const searchDrinksQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const res = await axios.get(`${searchURL}${searchTerm}`)
      return res.data.drinks
    }
  }
}

export const loader = (queryClient) => async ({request}) => {
    const url = new URL(request.url)

    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchDrinksQuery(searchTerm))
    return {searchTerm}
}

const Landing = () => {
    const {searchTerm} = useLoaderData();
    const {data: drinks} = useQuery(searchDrinksQuery(searchTerm))

  return (
    <>
      <SearchBar searchTerm = {searchTerm}/>
      <Cocktails drinks = {drinks}/>
    </>
  )
}

export default Landing
