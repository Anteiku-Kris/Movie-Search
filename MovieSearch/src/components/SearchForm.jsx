export const SearchForm = ({ buscador, onInputChange, onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Find a movie"
          value={buscador}
          onChange={onInputChange}
        />
        <button type="submit" className="search-button">
          Find
        </button>
      </form>
    );
  };
  