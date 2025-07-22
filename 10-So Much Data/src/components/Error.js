import { useRouteError } from 'react-router-dom';

function Error() {
   const error = useRouteError();

   return (
      <div className="error">
         <h1>Error: {error}</h1>
      </div>
   );
}

export default Error;
