import { useEffect, useState } from 'react';

export function useRestaurantMenu(restroId) {
   const [restroMenu, setRestroMenu] = useState(null);

   useEffect(() => {
      const fetchMenu = async () => {
         const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4563596&lng=72.79246119999999&restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`
         );

         const json = await data.json();

         setRestroMenu(json);
      };

      fetchMenu();
   }, [restroId]);

   return restroMenu;
}
