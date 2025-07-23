import { useState } from 'react';
import ItemCard from './ItemCard';

function RestroCategory({ data }) {
  const [accordian, setAccordian] = useState(false);

  function handleClick() {
    setAccordian(!accordian);
  }
  return (
    <div className="accordian" onClick={handleClick}>
      <div className="accordian-2">
        <span className="head">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {accordian ? <ItemCard items={data.itemCards} /> : ''}
    </div>
  );
}

export default RestroCategory;
