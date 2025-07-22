import { useEffect, useState } from 'react';

export function useStatus() {
   const [status, setStatus] = useState(true);

   useEffect(() => {
      window.addEventListener('online', () => {
         setStatus(true);
      });

      window.addEventListener('offline', () => {
         setStatus(false);
      });
   }, []);

   return status;
}
