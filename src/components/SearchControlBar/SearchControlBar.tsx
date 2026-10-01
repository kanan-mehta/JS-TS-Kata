import { useRef } from "react";
import {
  ArrowDown01,
  ArrowDownAZ,
  ArrowUpDown,
  ArrowUp10,
  ArrowUpAZ,
  ChevronDown,
  Filter,
  Search,
} from "lucide-react";
import type { KataSort, KataStatus } from "../../types/kata";
import "./SearchControlBar.css";

type SearchControlBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  statusFilter: "all" | KataStatus;
  onStatusFilterChange: (value: "all" | KataStatus) => void;
  sort: KataSort;
  onSortChange: (value: KataSort) => void;
};

const SearchControlBar = ({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  sort,
  onSortChange,
}: SearchControlBarProps) => {
  const sortMenuRef = useRef<HTMLDetailsElement>(null);
  const filterSelectRef = useRef<HTMLSelectElement>(null);

  const closeDropdowns = () => {
    if (sortMenuRef.current) sortMenuRef.current.open = false;
    filterSelectRef.current?.blur();
  };

  const handleSortChange = (value: KataSort) => {
    onSortChange(value);
    if (sortMenuRef.current) sortMenuRef.current.open = false;
  };

  return (
    <div
      className="kata-list__toolbar"
      role="search"
      aria-label="Kata controls"
    >
      <label
        className="kata-list__search"
        aria-label="Search challenges"
        onPointerDown={closeDropdowns}
        onFocus={closeDropdowns}
      >
        <Search size={14} className="kata-list__toolbar-icon" />
        <input
          type="search"
          name="kata-search"
          placeholder="Search"
          className="kata-list__search-input"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>

      <label className="kata-list__control" aria-label="Filter challenges">
        <Filter size={14} className="kata-list__toolbar-icon" />
        <span className="kata-list__select-wrap">
          <select
            ref={filterSelectRef}
            aria-label="Filter by status"
            value={statusFilter}
            onPointerDown={() => {
              if (sortMenuRef.current) sortMenuRef.current.open = false;
            }}
            onFocus={() => {
              if (sortMenuRef.current) sortMenuRef.current.open = false;
            }}
            onChange={(event) =>
              onStatusFilterChange(event.target.value as "all" | KataStatus)
            }
          >
            <option value="all">All</option>
            <option value="implemented">Implemented</option>
            <option value="planned">Planned</option>
          </select>
        </span>
      </label>

      <details
        className="kata-list__sort-menu"
        ref={sortMenuRef}
        onToggle={(event) => {
          if (event.currentTarget.open) filterSelectRef.current?.blur();
        }}
      >
        <summary className="kata-list__sort-trigger">
          <ArrowUpDown size={14} className="kata-list__toolbar-icon" />
          <span>Sort</span>
          <ChevronDown size={13} aria-hidden="true" />
        </summary>
        <div
          className="kata-list__sort-options"
          role="group"
          aria-label="Sort challenges"
        >
          <button
            type="button"
            className="kata-list__sort-button"
            aria-label="Sort title A to Z"
            aria-pressed={sort === "title-asc"}
            title="Sort title A to Z"
            onClick={() => handleSortChange("title-asc")}
          >
            <ArrowDownAZ size={16} aria-hidden="true" />
            <span>Title A-Z</span>
          </button>
          <button
            type="button"
            className="kata-list__sort-button"
            aria-label="Sort title Z to A"
            aria-pressed={sort === "title-desc"}
            title="Sort title Z to A"
            onClick={() => handleSortChange("title-desc")}
          >
            <ArrowUpAZ size={16} aria-hidden="true" />
            <span>Title Z-A</span>
          </button>
          <button
            type="button"
            className="kata-list__sort-button"
            aria-label="Sort number ascending"
            aria-pressed={sort === "number-asc"}
            title="Sort number ascending"
            onClick={() => handleSortChange("number-asc")}
          >
            <ArrowDown01 size={16} aria-hidden="true" />
            <span>Number low to high</span>
          </button>
          <button
            type="button"
            className="kata-list__sort-button"
            aria-label="Sort number descending"
            aria-pressed={sort === "number-desc"}
            title="Sort number descending"
            onClick={() => handleSortChange("number-desc")}
          >
            <ArrowUp10 size={16} aria-hidden="true" />
            <span>Number high to low</span>
          </button>
        </div>
      </details>
    </div>
  );
};

export default SearchControlBar;
