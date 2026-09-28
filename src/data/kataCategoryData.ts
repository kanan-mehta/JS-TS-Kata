import type { LucideIcon } from "lucide-react";

import {
  Quote,
  Braces,
  Rows3,
  GitFork,
  Cpu,
  Regex,
  Calculator,
  Grid3x3,
} from "lucide-react";

export type CategoryMeta = {
  name: string;
  categorySlug: string;
  icon: LucideIcon;
  description: string;
};

const categoryMeta: Record<string, CategoryMeta> = {
  strings: {
    name: "Strings",
    categorySlug: "strings",
    icon: Quote,
    description: "Text manipulation, matching, and transformation",
  },

  javascript: {
    name: "JavaScript",
    categorySlug: "javascript",
    icon: Braces,
    description: "Core language features and built-in behavior",
  },

  arrays: {
    name: "Arrays",
    categorySlug: "arrays",
    icon: Rows3,
    description: "Collection manipulation, iteration, and transformation",
  },

  trees: {
    name: "Trees",
    categorySlug: "trees",
    icon: GitFork,
    description: "Hierarchical data structures and traversal",
  },

  algorithms: {
    name: "Algorithms",
    categorySlug: "algorithms",
    icon: Cpu,
    description: "Problem-solving patterns, optimization, and logic",
  },

  parsing: {
    name: "Parsing",
    categorySlug: "parsing",
    icon: Regex,
    description: "Extracting and transforming structured data",
  },

  math: {
    name: "Math",
    categorySlug: "math",
    icon: Calculator,
    description: "Numerical logic, calculations, and mathematical patterns",
  },

  grids: {
    name: "Grids",
    categorySlug: "grids",
    icon: Grid3x3,
    description: "Two-dimensional data, traversal, and matrix logic",
  },
};

const getCategoryMeta = (category: string): CategoryMeta => {
  return categoryMeta[category] ?? categoryMeta.javascript;
};

export default getCategoryMeta;
