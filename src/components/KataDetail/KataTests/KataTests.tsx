import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { runKataTests } from "../../../lib/kataRunner";
import "./KataTests.css";
import KataAccordionItem from "../KataAccordion/KataAccordionItem";
import KataTestResults from "../KataTestResults/KataTestResults";
import type { KataAssets, TestResult } from "../../../types/kata";

type KataTestsProps = {
  assets: KataAssets;
};

const KataTests = ({ assets }: KataTestsProps) => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRunTests, setHasRunTests] = useState(false);

  const handleRunTests = async () => {
    setIsRunning(true);

    await new Promise<void>((resolve) => window.setTimeout(resolve, 160));

    try {
      const testResults = runKataTests(assets.solution, assets.cases);
      setResults(testResults);
      setHasRunTests(true);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <KataAccordionItem
      title="My Tests"
      id="tests"
      modifierClass="kata-detail-page__accordion--tests"
      triggerModifierClass="kata-detail-page__accordion-trigger--tests"
    >
      <div
        id="accordion-tests-panel"
        className="kata-detail-page__accordion-panel"
        role="region"
        aria-labelledby="accordion-tests-trigger"
      >
        <ul className="kata-detail-page__test-cases">
          {assets.cases.map((testCase, index) => (
            <li key={index} className="kata-detail-page__test-case">
              <span>Case {index + 1}</span>

              <div>
                <strong>Input</strong>
                <code>{JSON.stringify(testCase.input)}</code>
              </div>

              <div>
                <strong>Expected output</strong>
                <code>{JSON.stringify(testCase.expected)}</code>
              </div>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="kata-test-results__run-button"
          onClick={handleRunTests}
          disabled={isRunning}
          aria-busy={isRunning}
        >
          {isRunning && (
            <LoaderCircle
              className="kata-test-results__spinner"
              size={16}
              aria-hidden="true"
            />
          )}
          {isRunning
            ? "Running tests..."
            : hasRunTests
              ? "Run Tests Again"
              : "Run Tests"}
        </button>

        {results.length > 0 && <KataTestResults results={results} />}
      </div>
    </KataAccordionItem>
  );
};

export default KataTests;
