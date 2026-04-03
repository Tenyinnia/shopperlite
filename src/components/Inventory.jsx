export default function StockStatus({ stock}) {
  if (stock === 0) {
    return <span className="out-stock">Out of stock</span>;
  }

  if (stock < 10) {
    return (
      <span className="few-stock">
         {stock} in stock
      </span>
    );
  }

  return <span className="in-stock">In stock</span>;
}
