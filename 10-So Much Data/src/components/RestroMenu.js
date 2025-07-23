import Shimmer from './Shimmer.js';
import { useParams } from 'react-router-dom';
import { useRestaurantMenu } from '../hooks/useRestaurantMenu.js';
import RestroCategory from './RestroCategory.js';

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

  const itemCards =
    restroMenu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = itemCards.filter(
    (card) =>
      card.card.card['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );

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
      {categories.map((category, i) => (
        <RestroCategory key={i} data={category.card.card} />
      ))}
    </div>
  );
}

export default RestroMenu;
