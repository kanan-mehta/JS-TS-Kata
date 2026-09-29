export interface KataApproach {
  steps: string[];
}

export interface KataCase {
  input: unknown[];
  expected: unknown;
}

const approachModules = import.meta.glob<KataApproach>(
  "/src/katas/**/approach.ts",
  {
    eager: true,
    import: "approach",
  },
);

const solutionModules = import.meta.glob("/src/katas/**/solution.ts", {
  eager: true,
  import: "default",
});

const solutionCodeModules = import.meta.glob("/src/katas/**/solution.ts", {
  eager: true,
  query: "?raw",
  import: "default",
});

const casesModules = import.meta.glob<KataCase[]>("/src/katas/**/cases.ts", {
  eager: true,
  import: "cases",
});

export const getKataAssests = (slug: string) => {
  const basePath = `/src/katas/${slug}`;

  return {
    approach: approachModules[`${basePath}/approach.ts`],
    solutionCode: solutionCodeModules[`${basePath}/solution.ts`],
    solution: solutionModules[`${basePath}/solution.ts`],
    cases: casesModules[`${basePath}/cases.ts`],
  };
};
