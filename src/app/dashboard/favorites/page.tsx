import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/pokemons";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";
import Image from "next/image";
import { title } from "process";

export const metadata={
    title: 'Favoritos',
    description: 'Listado de Pokemons favoritos'
}


export default async function PokemonsPage() {
  // 'use cache';
  // cacheTag('pokemons');

    // cacheLife({
    //   stale: 10,
    //   revalidate:60
    // });

    // revalidateTag('pokemons', 'max');



  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}