export default (props) => {
  let product = props.product;

  return (
    <div>
      <h1 className="mb-4">{product.name}</h1>
      <h2 className="mb-4">${product.price.regularPrice.amount.value}</h2>
      <div dangerouslySetInnerHTML={{__html: product.description}} />
    </div>
  );
};
