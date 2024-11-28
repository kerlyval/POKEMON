import { Link, useFetcher, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Fragment, useEffect } from 'react';
import { tipos } from '../utils/helpers';
import '../styles/Details.css';

function Details() {
	const params = useParams();
	const [pokemon, setPokemon] = useFetch();

	useEffect(() => {
		if (params.name) getPokemon();
	}, [params.name]);

	const getPokemon = () => {
		setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
	};

	const types = pokemon?.types.map((type) => type.type.name);

	return (
		<div className="poke__card-body">
			<Link to="/pokedex" className="poke-link">
				{'←'} Volver
			</Link>

			<div className="pokemon__container">
				<div className="pokemon__imagen">
					<img
						src={pokemon?.sprites?.other?.dream_world?.front_default}
						alt=""
						className="pokemon__api"
					/>
				</div>

				<div className="pokemon__segundocontainer">
					<div className="header__logo">
						<img
							src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
							alt="pokebola"
							className="pokebola"
						/>
						<span className="numero__poke">
							<h2 className="name__poke">{pokemon?.name} </h2> #
							{pokemon?.id?.toString().padStart(3, '0')}
						</span>
					</div>

					{/* PESO Y ALTURA  */}
					<div>
						<span className="poke__card-type">
							<span>PESO</span>
							{pokemon?.weight}
						</span>

						<span className="poke__card-type">
							<span>ALTURA</span>
							{pokemon?.height}
						</span>
					</div>

					{/* OTROS DATOS */}
					<div className="poke__card-body">
						<div className="poke__habil">
							<div>
								<h3 className="poke__habil-item">TIPO</h3>
								<div>
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
								</div>
							</div>

							<div className="poke__card-body">
								<h3 className="poke__habil-item">HABILIDADES</h3>
								<div>
									{pokemon?.abilities?.map((data, index) => {
										return (
											<Fragment key={data.ability.name}>
												{' '}
												{index > 0 ? (
													<>
														{' /'} <span>{data.ability.name}</span>
													</>
												) : (
													<span>{data.ability.name}</span>
												)}
											</Fragment>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					{/* <img
						src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
						alt="pokebola"
						className="pokebola2"
					/> */}
				</div>
			</div>
		</div>
	);
}

export { Details };
