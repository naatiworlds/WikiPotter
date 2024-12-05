const SearchCharacters = ({
    searchName,
    setSearchName,
    searchHouse,
    setSearchHouse,
    houses,
  }) => {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
  
        <select
          value={searchHouse}
          onChange={(e) => setSearchHouse(e.target.value)}
        >
          <option value="">Todas las casas</option>
          {houses.map((house) => (
            <option key={house} value={house}>
              {house}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SearchCharacters;
  