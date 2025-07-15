import RestroCard from './RestroCard.js';
import { restroData } from '../utils/constants.js';

function RestroContainer() {
   return (
      <div className="restro-card-container">
         {restroData.map((restro) => (
            <RestroCard restroObj={restro} key={restro.info.id} />
         ))}
      </div>
   );
}

export default RestroContainer;
