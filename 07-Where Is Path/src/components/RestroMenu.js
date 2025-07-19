import { useEffect, useState } from 'react';
import Shimmer from './Shimmer.js';
import { useParams } from 'react-router-dom';

function RestroMenu() {
   const [restroMenu, setRestroMenu] = useState(null);
   const { restroId } = useParams();

   async function fetchMenu() {
      const data = await fetch(
         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4563596&lng=72.79246119999999&restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`
      );

      const json = await data.json();

      setRestroMenu(json);
   }

   useEffect(() => {
      fetchMenu();
   }, []);

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

   console.log(itemCards);

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
