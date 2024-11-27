import StatsCard from "./StatsCard";
import "./RightStats.css";
const RightStats = () => {
  const statsData = [
    { title: "Today's Bookings", count: 4006, percentage: 10, color: "blue" },
    { title: "Total Bookings", count: 61344, percentage: 22, color: "purple" },
    {
      title: "Number of Meetings",
      count: 34040,
      percentage: 2,
      color: "violet",
    },
    {
      title: "Number of Clients",
      count: 47033,
      percentage: 0.22,
      color: "red",
    },
  ];

  return (
    <div className="stats">
      <img src="photo.png" alt="Weather" />
      <div className="right-stats">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            count={stat.count}
            percentage={stat.percentage}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default RightStats;
