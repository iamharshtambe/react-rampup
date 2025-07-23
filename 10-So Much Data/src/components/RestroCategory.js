function RestroCategory({ data }) {
  return (
    <div>
      {data.title} ({data.itemCards.length})
    </div>
  );
}

export default RestroCategory;
