// CurrencyFormatter.jsx
export default function FormatCurrency({ amount }) {
  const value = Number(amount);

  if (isNaN(value)) {
    return <span>$0.00</span>;
  }

  return (
    <span>
      {value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </span>
  );
}