function ItemCard({ items }) {
  console.log(items);
  return (
    <div className="item">
      {items.map((item, i) => (
        <div key={i} className="item-3">
          <div className="item-2">
            <span>{item.card.info.name} </span>
            <span>
              Rs.{' '}
              {(item.card.info.price / 100) |
                (item.card.info.defaultPrice / 100)}
            </span>
            <span className="font">{item.card.info.description}</span>
          </div>
          <div>
            <img
              src={
                'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/' +
                item.card.info.imageId
              }
              className="img-1"
            ></img>
          </div>
          <button className="btn-2">Add</button>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
