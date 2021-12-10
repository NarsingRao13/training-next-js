import Alert from "react-bootstrap/Alert";

export default function ProductDetails({
  key,
  productDescription,
  price,
  productID,
  productName,
  productType,
  slug,
  productImage,
}) {
  return (
    <div>
      <h1>Product Detail:</h1>
      <h2>Name : {productName}</h2>
      <h2>{slug}</h2>
      <img src={productImage} style={{ width: 150, height: 150 }} />
    </div>
  );
}
