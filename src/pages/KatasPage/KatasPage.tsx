import { useState } from "react";
import KatasList from "../../components/KatasList/KatasList";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchControlBar from "../../components/SearchControlBar/SearchControlBar";
import katas from "../../data/kataData";
import type { KataSort, KataStatus } from "../../types/kata";

const KatasPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | KataStatus>("all");
  const [sort, setSort] = useState<KataSort>("number-asc");

  const visibleKatas = katas
    .filter((kata) => {
      const query = search.trim().toLowerCase();
      const matchesSearch =
        query.length === 0 ||
        kata.title.toLowerCase().includes(query) ||
        kata.concepts.some((concept) => concept.toLowerCase().includes(query));
      const matchesStatus =
        statusFilter === "all" || kata.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((first, second) => {
      switch (sort) {
        case "title-asc":
          return first.title.localeCompare(second.title);
        case "title-desc":
          return second.title.localeCompare(first.title);
        case "number-desc":
          return second.id - first.id;
        case "number-asc":
          return first.id - second.id;
      }
    });

  return (
    <section className="page-shell">
      <PageHeader heading="All Katas" subheading="All Katas" />
      <SearchControlBar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        sort={sort}
        onSortChange={setSort}
      />
      <KatasList katasToDisplay={visibleKatas} />
    </section>
  );
};

export default KatasPage;
