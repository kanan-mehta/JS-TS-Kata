import katas from "../../data/kataData";
import "./ProgressSummary.css";

const ProgressSummary = () => {
  const categoryCounts = katas.reduce<Record<string, number>>((acc, cur) => {
    const category = cur.category;

    acc[category] = (acc[category] || 0) + 1;

    return acc;
  }, {});
  const totalCompleted = katas.filter(
    (kata) => kata.status === "completed",
  ).length;
  const totalChallenges = katas.length;
  const totalConcepts = Object.keys(categoryCounts).length;
  const overallProgress = Math.round((totalCompleted / totalChallenges) * 100);

  return (
    <div className="progress-summary">
      <div className="progress-summary__card">
        <span className="progress-summary__label">Solved</span>
        <strong>{totalCompleted}</strong>
      </div>
      <div className="progress-summary__card">
        <span className="progress-summary__label">Concepts</span>
        <strong>{totalConcepts}</strong>
      </div>
      <div className="progress-summary__card">
        <span className="progress-summary__label">Progress</span>
        <strong>{overallProgress}%</strong>
      </div>
    </div>
  );
};

export default ProgressSummary;
