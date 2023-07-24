function MappingLatestProducts({ latest }) {
  return (
    <div className="latest-product-group">
      {latest.map((product, i) => (
        <div className="latest-product">
          <img src={`${product.url}`} alt="" />
          <div className="latest-product-text">
            <em className="filter">{product.filter}</em>
            <p className="title">{product.title}</p>
            <strong className="price">${product.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MappingLatestProducts;
