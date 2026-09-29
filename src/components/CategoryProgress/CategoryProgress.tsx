import { Link } from "react-router-dom";
import getCategoryMeta from "../../data/kataCategoryData";
import katas from "../../data/kataData";
import "./CategoryProgress.css";

const CategoryProgress = () => {
  const categoryCounts = katas.reduce<Record<string, number>>((acc, cur) => {
    const category = cur.category;

    acc[category] = (acc[category] || 0) + 1;

    return acc;
  }, {});

  return (
    <div className="category-progress">
      <h2 className="category-progress__title">Concept Progress</h2>
      <ul className="category-progress__list">
        {Object.entries(categoryCounts).map(([categoryName]) => {
          const category = getCategoryMeta(categoryName);

          const completedKatas = katas.filter(
            (kata) =>
              kata.category === categoryName && kata.status === "implemented",
          ).length;
          const totalKatas = katas.filter(
            (kata) => kata.category === categoryName,
          ).length;
          const progress = (completedKatas / totalKatas) * 100;

          const Icon = category.icon;

          return (
            <li key={category.categorySlug} className="category-progress__item">
              <Link
                to={`/katas/${category.categorySlug}`}
                className="category-progress__link"
              >
                <div className="category-progress__meta">
                  <div className="category-progress__title-wrap">
                    <span className="category-progress__icon">
                      <Icon size={16} />
                    </span>
                    <span className="category-progress__label">
                      {category.name}
                    </span>
                  </div>
                  <span className="category-progress__count">
                    {completedKatas}/{totalKatas}
                  </span>
                </div>
                <div className="category-progress__progress">
                  <div
                    className="category-progress__progress-fill"
                    style={{ width: `${progress}%` }}
                  >
                    <span className="category-progress__progress-value">
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryProgress;
