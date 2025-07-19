import { IMG_URL } from '../utils/constants.js';

function RestroCard({ restroObj }) {
   const {
      cloudinaryImageId,
      name,
      locality,
      areaName,
      cuisines,
      avgRating,
      sla,
   } = restroObj?.info;

   return (
      <div className="restro-card">
         <img src={IMG_URL + cloudinaryImageId} />
         <p>
            <b> {name}</b>
         </p>
         <p>
            {locality}, {areaName}
         </p>
         <p>{cuisines.join(', ')}</p>
         <p>{avgRating}</p>
         <p>{sla.deliveryTime} Minutes</p>
      </div>
   );
}

export default RestroCard;
