import './removefavorite.css';
import { BsTrashFill } from 'react-icons/bs';

const RemoveFavorite = () => {
  return (
    <div className='AddFavorite'>
      <span>Remove from Favorites</span>
      <BsTrashFill color='red' />
    </div>
  )
}

export default RemoveFavorite