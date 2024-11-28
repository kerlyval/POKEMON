import { Link } from 'react-router-dom';
import { useNameContext } from '../../contexts/nameContext';
import '../../styles/Header.css';

function Header() {
	const [name] = useNameContext();

	return (
		<div className="pokedex__header">
			<Link to="/" className="poke-link">
				{'←'} Volver{' '}
			</Link>

			<div>
				<p>
					Bienvenido{' '}
					{name.split('').map((letter, index) => (
						<span key={index} className="letter">
							{letter}
						</span>
					))}
					, Aquí podrás encontrar tu pokemon favorito
				</p>
			</div>
		</div>
	);
}

export default Header;
