import RestroCard from './RestroCard.js';
import { restroData } from '../utils/constants.js';
import Filters from './Filters.js';

function RestroContainer() {
   return (
      <>
         <Filters />
         <div className="restro-card-container">
            {restroData.map((restro) => (
               <RestroCard restroObj={restro} key={restro.info.id} />
            ))}
         </div>
      </>
   );
}

export default RestroContainer;
