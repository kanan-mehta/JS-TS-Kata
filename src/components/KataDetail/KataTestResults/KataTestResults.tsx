import "./KataTestResults.css";
import type { TestResult } from "../../../types/kata";

type KataTestResultsProps = {
  results: TestResult[];
};

const KataTestResults = ({ results }: KataTestResultsProps) => {
  const passedTests = results.filter((result) => result.passed).length;

  return (
    <section className="kata-test-results">
      <div className="kata-test-results__header">
        <h3>Test Results</h3>

        <span>
          {passedTests} / {results.length} tests passed
        </span>
      </div>

      <ul className="kata-test-results__list">
        {results.map((result) => (
          <li
            key={result.caseNumber}
            className={`kata-test-results__item ${
              result.passed
                ? "kata-test-results__item--passed"
                : "kata-test-results__item--failed"
            }`}
          >
            <div className="kata-test-results__case">
              <span>{result.passed ? "✓" : "✕"}</span>

              <strong>Case {result.caseNumber}</strong>
            </div>

            <div>
              <strong>Input</strong>
              <code>{JSON.stringify(result.input)}</code>
            </div>

            <div>
              <strong>Expected</strong>
              <code>{JSON.stringify(result.expected)}</code>
            </div>

            <div>
              <strong>Actual</strong>
              <code>{JSON.stringify(result.actual)}</code>
            </div>

            {result.error && (
              <div>
                <strong>Error</strong>
                <code>{result.error}</code>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KataTestResults;
