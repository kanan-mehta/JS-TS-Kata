type KataSolution<TArgs extends unknown[], TResult> = (
  ...args: TArgs
) => TResult;

export function runKataTests<TArgs extends unknown[], TResult>(
  solution: KataSolution<TArgs, TResult>,
  cases: {
    input: TArgs;
    expected: TResult;
  }[],
) {
  return cases.map((testCase, index) => {
    try {
      const actual = solution(...testCase.input);

      const passed =
        JSON.stringify(actual) === JSON.stringify(testCase.expected);

      return {
        caseNumber: index + 1,
        input: testCase.input,
        expected: testCase.expected,
        actual,
        passed,
      };
    } catch (error) {
      return {
        caseNumber: index + 1,
        input: testCase.input,
        expected: testCase.expected,
        actual: undefined,
        passed: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  });
}
