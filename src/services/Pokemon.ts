import axios from "axios";

import { ListPokemonInterface, PokemonDetail } from "../types/Pokemon";


export async function listPokemons(page: number): Promise<ListPokemonInterface> {
  const endpoint =  `${process.env.REACT_APP_POKEAPI}/pokemon?limit=20&offset=${page*20}`

  const response = await axios.get<ListPokemonInterface>(endpoint);

  const promiseArr = response.data.results.map(({name})=> getPokemonDetails(name))
  const resultsPromise = await Promise.all(promiseArr)

  return {
    ...response.data,
    results: resultsPromise
  }
}

export async function getPokemonDetails(name: string | undefined): Promise<PokemonDetail> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`

  const response = await axios.get<PokemonDetail>(endpoint);

  return response.data
}

