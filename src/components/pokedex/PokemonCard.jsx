import { Fragment, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { tipos } from '../../utils/helpers';
import '../../styles/PokemonCard.css';

function PokemonCard({ url }) {
	const [pokemon, setPokemon] = useFetch();

	useEffect(() => {
		if (url) getPokemon();
	}, [url]);

	const getPokemon = () => {
		setPokemon(url);
	};

	const types = pokemon?.types.map((type) => type.type.name);

	if (!types) return;

	return (
		<Link className="poke" to={`/pokedex/${pokemon?.name}`}>
			<div className={`poke__card type--${types[0]}`}>
				<div className="poke__card-header">
					<img
						src={pokemon?.sprites?.other?.dream_world?.front_default}
						alt=""
					/>
				</div>

				<div className="poke__card-body">
					<h2 className="poke__card-name">{pokemon?.name}</h2>
					<span className="poke__card-types">
						{types?.map((type, index) => {
							return (
								<Fragment key={type}>
									{index > 0 ? (
										<>
											{' /'} <span>{tipos[type]}</span>
										</>
									) : (
										<span>{tipos[type]}</span>
									)}
								</Fragment>
							);
						})}
					</span>
					<p className="poke__card-type-label">Tipo</p>
					<div className="poke__card-stats">
						<div className="poke__card-stats-item">
							<span>
								{' '}
								<i class="bx bxs-battery-charging"></i> HP
							</span>

							<span>{pokemon?.stats[0]?.base_stat}</span>
						</div>

						<div className="poke__card-stats-item">
							<span>
								{' '}
								<i class="bx bxs-castle"></i> ATAQUE
							</span>

							<span>{pokemon?.stats[1]?.base_stat}</span>
						</div>

						<div className="poke__card-stats-item">
							<span>
								{' '}
								<i class="bx bxs-shield"></i> DEFENSA
							</span>
							<span>{pokemon?.stats[2]?.base_stat}</span>
						</div>

						<div className="poke__card-stats-item">
							<span>
								{' '}
								<i class="bx bxs-bolt"></i> VELOCIDAD
							</span>
							<span>{pokemon?.stats[5]?.base_stat}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PokemonCard;
