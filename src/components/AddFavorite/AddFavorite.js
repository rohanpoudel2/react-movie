import './addfavorite.css';

import { BsFillHeartFill } from 'react-icons/bs';

const AddFavorite = () => {
  return (
    <div className='AddFavorite'>
      <span>Add to Favorites</span>
      <BsFillHeartFill color='red' />
    </div>
  )
}

export default AddFavorite