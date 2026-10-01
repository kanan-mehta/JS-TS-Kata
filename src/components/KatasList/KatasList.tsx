// import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
// import { Search, Filter, ArrowUpDown } from "lucide-react";
import katas from "../../data/kataData";
import type { Kata } from "../../types/kata";
import "./KatasList.css";

type KataListProps = {
  category?: string;
  katasToDisplay?: Kata[];
};

// type StatusFilter = "all" | "not-started" | "in-progress" | "completed";
// type SortOption = "A-Z Challenge Name" | "Z-A Challenge Name" | "category";

// const getMdnConceptUrl = (concept: string) =>
//   `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(concept)}`;

const KatasList = ({
  category = "all",
  katasToDisplay = katas,
}: KataListProps) => {
  return (
    <section className="kata-list" aria-label="Kata list">
      <ul className="kata-list__list">
        {katasToDisplay.length === 0 && (
          <li className="kata-list__empty">No katas match your search.</li>
        )}
        {katasToDisplay.map((kataDetail) => {
          const rowContent = (
            <>
              <span className="kata-list__number">
                #{String(kataDetail.id).padStart(2, "0")}
              </span>

              <div className="kata-list__content">
                <h3 className="kata-list__title">{kataDetail.title}</h3>
              </div>

              <div className="kata-list__concepts" aria-label="Concepts">
                {kataDetail.concepts.map((concept) => (
                  <p className="kata-list__concept" key={concept}>
                    {concept}
                  </p>
                ))}
              </div>

              <span
                className={`kata-list__status kata-list__status--${kataDetail.status}`}
              >
                {kataDetail.status.replace("-", " ")}
              </span>
            </>
          );
          const isImplemented = kataDetail.status === "implemented";

          return (
            <li
              key={kataDetail.id}
              className={`kata-list__item ${
                isImplemented ? "" : "kata-list__item--disabled"
              }`}
            >
              {isImplemented ? (
                <Link
                  to={`/katas/${category}/${kataDetail.slug}`}
                  className="kata-list__link"
                >
                  {rowContent}
                </Link>
              ) : (
                <div
                  className="kata-list__link kata-list__link--disabled"
                  aria-disabled="true"
                >
                  {rowContent}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default KatasList;
