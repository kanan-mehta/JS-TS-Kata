import type { KataApproach, KataCase, KataSolution } from "../types/kata";

export type { KataApproach, KataCase, KataSolution } from "../types/kata";

const approachModules = import.meta.glob<KataApproach>(
  "/src/katas/**/approach.ts",
  {
    eager: true,
    import: "approach",
  },
);

const solutionModules = import.meta.glob<KataSolution>(
  "/src/katas/**/solution.ts",
  {
    eager: true,
    import: "default",
  },
);

const solutionCodeModules = import.meta.glob("/src/katas/**/solution.ts", {
  eager: true,
  query: "?raw",
  import: "default",
});

const casesModules = import.meta.glob<KataCase[]>("/src/katas/**/cases.ts", {
  eager: true,
  import: "cases",
});

export const getKataAssets = (slug: string) => {
  const basePath = `/src/katas/${slug}`;

  return {
    approach: approachModules[`${basePath}/approach.ts`],
    solutionCode: solutionCodeModules[`${basePath}/solution.ts`],
    solution: solutionModules[`${basePath}/solution.ts`],
    cases: casesModules[`${basePath}/cases.ts`],
  };
};
