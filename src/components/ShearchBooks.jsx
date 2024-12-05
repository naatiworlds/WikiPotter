const ShearchBooks = ({
  searchTitle,
  searchYear,
  setSearchTitle,
  setSearchYear,
  years,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar por título..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <select
        value={searchYear}
        onChange={(e) => setSearchYear(e.target.value)}
      >
        <option value="">Todos los años</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShearchBooks;
