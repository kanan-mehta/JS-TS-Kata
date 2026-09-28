import { ArrowUpDown, Filter, Search } from "lucide-react";
import "./SearchControlBar.css";

const SearchControlBar = () => {
  return (
    <div className="kata-list__toolbar" aria-label="Kata controls">
      <label className="kata-list__search" aria-label="Search challenges">
        <Search size={14} className="kata-list__toolbar-icon" />
        <input
          type="search"
          name="kata-search"
          placeholder="Search"
          className="kata-list__search-input"
        />
      </label>

      <label className="kata-list__control" aria-label="Filter challenges">
        <Filter size={14} className="kata-list__toolbar-icon" />
        <span className="kata-list__select-wrap">
          <select>
            <option value="all">All</option>
            <option value="not-started">Not started</option>
            <option value="in-progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </label>

      <label className="kata-list__control" aria-label="Sort challenges">
        <ArrowUpDown size={14} className="kata-list__toolbar-icon" />
        <span className="kata-list__select-wrap">
          <select>
            <option value="id">Number</option>
            <option value="title">Title</option>
            <option value="status">Status</option>
          </select>
        </span>
      </label>
    </div>
  );
};

export default SearchControlBar;
