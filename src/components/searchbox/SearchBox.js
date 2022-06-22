import './searchbox.css';

const searchBox = ({ search, setSearchBox }) => {
  return (
    <div className='searchBox'>
      <input type="text" placeholder='Name of Movie' value={search} onChange={(e) => setSearchBox(e.target.value)} />
    </div>
  )
}

export default searchBox