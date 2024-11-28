import { IoSearch } from 'react-icons/io5';
import { useRef } from 'react';
import '../../styles/Search.css';

function Search({ handleSearch }) {
	const inputRef = useRef();

	const onSearch = () => {
		handleSearch(inputRef.current.value.toLowerCase().trim());
		inputRef.current.value = '';
	};

	return (
		<div className="search">
			<div className="search__input">
				<IoSearch />
				<input type="text" placeholder="Buscar un pokemon" ref={inputRef} />
			</div>
			<button onClick={onSearch} className="search__btn">
				Buscar
			</button>
		</div>
	);
}

export default Search;
