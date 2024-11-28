import PokemonCard from './PokemonCard';
import '../../styles/PokemonList.css';

function PokemonList({ pokemons, isFiltering }) {
	return (
		<>
			{pokemons?.map((pokemon) => {
				const pokemonUrl = isFiltering ? pokemon.pokemon.url : pokemon.url;

				const pokemoName = isFiltering ? pokemon.pokemon.name : pokemon.name;

				return <PokemonCard key={pokemoName} url={pokemonUrl} />;
			})}
		</>
	);
}

export default PokemonList;
