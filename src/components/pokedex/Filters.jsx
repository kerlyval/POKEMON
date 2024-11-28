import { useEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { tipos } from '../../utils/helpers';
import '../../styles/Filters.css';

function Filters({ handleTypeFilter }) {
	const [types, setTypes] = useFetch();
	const selectRef = useRef();

	useEffect(() => {
		getTypes();
	}, []);

	const getTypes = () => {
		setTypes('http://pokeapi.co/api/v2/type');
	};

	return (
		<div className="select">
			<select
				className="select__input"
				ref={selectRef}
				onChange={() => handleTypeFilter(selectRef.current.value)}
			>
				<option value="">Todos los tipos</option>
				{types?.results.map((type) => (
					<option key={type.name} value={type.name}>
						{tipos[type.name]}
					</option>
				))}
			</select>
		</div>
	);
}

export default Filters;
