import RestroCard from './RestroCard.js';
import { restroData } from '../utils/constants.js';
import { useState } from 'react';

function RestroContainer() {
   const [listOfRestros, setListOfRestros] = useState(restroData);

   function handleClick() {
      const filteredListOfRestros = listOfRestros.filter(
         (restro) => restro.info.avgRating > 4.2
      );

      setListOfRestros(filteredListOfRestros);
   }

   return (
      <>
         <div className="filter">
            <button onClick={handleClick}>Top Rated Restaurants</button>
         </div>
         <div className="restro-card-container">
            {listOfRestros.map((restro) => (
               <RestroCard restroObj={restro} key={restro.info.id} />
            ))}
         </div>
      </>
   );
}

export default RestroContainer;
