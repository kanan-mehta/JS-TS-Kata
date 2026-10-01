export type KataLanguage = "javascript" | "typescript";

export type KataCategory =
  | "strings"
  | "arrays"
  | "javascript"
  | "algorithms"
  | "trees"
  | "grids"
  | "parsing"
  | "math";

export type KataStatus = "implemented" | "planned";

export type KataSort =
  | "title-asc"
  | "title-desc"
  | "number-asc"
  | "number-desc";

export interface KataExample {
  id: string;
  code: string;
}

export interface Kata {
  id: number;
  slug: string;
  title: string;
  language: KataLanguage;
  category: KataCategory;
  concepts: string[];
  status: KataStatus;
  description?: string;
  examples?: KataExample[];
  constraints?: string[];
  notes?: string[];
}

export interface KataApproach {
  steps: string[];
}

export interface KataCase {
  input: unknown[];
  expected: unknown;
}

export type KataSolution = (...args: unknown[]) => unknown;

export type KataAssets = {
  approach: KataApproach;
  solutionCode: string;
  solution: KataSolution;
  cases: KataCase[];
};

export type TestResult = {
  caseNumber: number;
  input: unknown;
  expected: unknown;
  actual: unknown;
  passed: boolean;
  error?: string;
};
