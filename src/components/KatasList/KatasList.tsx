// import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
// import { Search, Filter, ArrowUpDown } from "lucide-react";
import katas from "../../data/kataData";
import "./KatasList.css";

type KataListProps = {
  category?: string;
};

// type StatusFilter = "all" | "not-started" | "in-progress" | "completed";
// type SortOption = "A-Z Challenge Name" | "Z-A Challenge Name" | "category";

// const getMdnConceptUrl = (concept: string) =>
//   `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(concept)}`;

const KatasList = ({ category = "all" }: KataListProps) => {
  return (
    <section className="kata-list" aria-label="Kata list">
      <ul className="kata-list__list">
        {katas.map((kataDetail) => (
          <li key={kataDetail.id} className="kata-list__item">
            <Link
              to={`/katas/${category}/${kataDetail.slug}`}
              className="kata-list__link"
            >
              <span className="kata-list__number">
                #{String(kataDetail.id).padStart(2, "0")}
              </span>

              <div className="kata-list__content">
                <h3 className="kata-list__title">{kataDetail.title}</h3>
              </div>

              <div className="kata-list__concepts" aria-label="Concepts">
                {kataDetail.concepts.map((concept) => (
                  //   <a
                  //     key={concept}
                  //     //   href={getMdnConceptUrl(concept)}
                  //     href="#"
                  //     target="_blank"
                  //     rel="noreferrer"
                  //     className="kata-list__concept"
                  //     aria-label={`${concept} on MDN`}
                  //   >
                  //     {concept}
                  //   </a>
                  <p className="kata-list__concept">{concept}</p>
                ))}
              </div>

              <span
                className={`kata-list__status kata-list__status--${kataDetail.status}`}
              >
                {kataDetail.status.replace("-", " ")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KatasList;
