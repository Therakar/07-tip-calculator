export default function TipPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="15">It was good (10%)</option>
        <option value="20">It was Perfect! (20%)</option>
      </select>
    </div>
  );
}
