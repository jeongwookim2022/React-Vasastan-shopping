function MappingBestProducts({ best }) {
  return (
    <div className="best-product-group">
      {best.map((product, i) => (
        <div className="best-product">
          <img src={`${product.url}`} alt="" />
          <div className="best-product-text">
            <em className="filter">{product.filter}</em>
            <p className="title">{product.title}</p>
            <strong className="price">${product.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MappingBestProducts;
