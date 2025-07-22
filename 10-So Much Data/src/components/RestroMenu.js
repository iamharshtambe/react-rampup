import Shimmer from './Shimmer.js';
import { useParams } from 'react-router-dom';
import { useRestaurantMenu } from '../hooks/useRestaurantMenu.js';

function RestroMenu() {
   const { restroId } = useParams();

   const restroMenu = useRestaurantMenu(restroId);

   if (!restroMenu) return <Shimmer />;

   const {
      name,
      avgRating,
      totalRatingsString,
      costForTwoMessage,
      cuisines,
      areaName,
      sla,
   } = restroMenu?.data?.cards[2]?.card?.card?.info;

   const { itemCards } =
      restroMenu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
         ?.card?.card;

   return (
      <div className="menu">
         <h1>{name}</h1>
         <p>
            {avgRating}({totalRatingsString}) | {costForTwoMessage}
         </p>
         <p>{cuisines.join(', ')}</p>
         <p>{areaName}</p>
         <p>{sla.deliveryTime} mins</p>

         <h1>Our Menu</h1>
         {itemCards.map((item) => (
            <li key={item.card.info.id}>
               {item.card.info.name} | {item.card.info.price / 100}
            </li>
         ))}
      </div>
   );
}

export default RestroMenu;
