import "./StatsCard.css";
const StatsCard = ({ title, count, percentage, color }) => {
  return (
    <div className={`stats-card stats-card-${color}`}>
      <h4>{title}</h4>
      <p>{count}</p>
      <small>{percentage}% (30 days)</small>
    </div>
  );
};

export default StatsCard;
