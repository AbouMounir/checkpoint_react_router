import { useState } from 'react';
import MovieCard from '../../../checkpoint_react_router/src/components/MovieCard';
import './../containers/App.css'

function Home(props) {
  
  const [filter, setFilter] = useState("")

  const handleFilter = (event) =>{
    setFilter(event.target.value)
  }
  return (
    <div className="App">
      <div className='box-from'>
        <input type="text" placeholder="Rechercher " className="from-control" onChange={handleFilter} />
      </div>
      <div className='boxMovies'>
        {props.data.filter((film) => { return film.title.toLowerCase().includes(filter)}).map((film) => {
          return (<MovieCard key={film.id} film={film} />)
        })}
      </div>
    </div>
  );
}

export default Home;
