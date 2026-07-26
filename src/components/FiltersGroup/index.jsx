import './index.css'

const FiltersGroup = props => {
  const {filtersList, activeGenre, onChangeGenre} = props

  return (
    <div className="filters-container">
      {filtersList.map(eachFilter => (
        <button
          key={eachFilter}
          className={
            activeGenre === eachFilter
              ? 'filter-btn active-filter'
              : 'filter-btn'
          }
          onClick={() => onChangeGenre(eachFilter)}
        >
          {eachFilter}
        </button>
      ))}
    </div>
  )
}

export default FiltersGroup