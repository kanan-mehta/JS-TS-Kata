import { useState } from "react";
import "./KatasDetailPage.css";

type AccordionSection = "approach" | "solution" | "tests";

const KatasDetailPage = () => {
  const exampleCode = `const isPalindrome1 = isPalindrome("racecar");
console.log(isPalindrome1); // true

const isPalindrome2 = isPalindrome(
  "A man, a plan, a canal: Panama"
);
console.log(isPalindrome2); // true`;

  const [openSections, setOpenSections] = useState<
    Record<AccordionSection, boolean>
  >({
    approach: true,
    solution: true,
    tests: true,
  });

  const toggleSection = (section: "approach" | "solution" | "tests") => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  return (
    <section className="page-shell kata-detail-page">
      <header className="kata-detail-page__header">
        <div className="kata-detail-page__eyebrow">Challenge</div>
        <div className="kata-detail-page__meta">
          <h1>Valid Palindrome</h1>
          <span className="kata-detail-page__difficulty">Easy</span>
        </div>
        <div className="kata-detail-page__concepts" aria-label="Concepts">
          <span className="kata-detail-page__concept">strings</span>
          <span className="kata-detail-page__concept">two pointers</span>
          <span className="kata-detail-page__concept">palindrome</span>
        </div>
      </header>

      <main className="kata-detail-page__content">
        <section className="kata-detail-page__panel">
          <div className="kata-detail-page__section-block">
            <h2>Problem</h2>
            <p>
              Given a string <code>s</code>, return <code>true</code> if it is a
              palindrome, or <code>false</code> otherwise.
            </p>
          </div>

          <div className="kata-detail-page__section-block">
            <h2>Examples</h2>

            <pre className="kata-detail-page__code">
              <code>{exampleCode}</code>
            </pre>
          </div>

          <div className="kata-detail-page__section-block">
            <h2>Constraints</h2>
            <ul className="kata-detail-page__list">
              <li>0 &lt;= s.length &lt;= 10^5</li>
              <li>
                s may contain ASCII characters (letters, digits, spaces,
                punctuation, and symbols)
              </li>
              <li>Comparison must be case-insensitive</li>
              <li>
                Only alphanumeric characters (a-z, A-Z, 0-9) should be
                considered
              </li>
              <li>An empty string is considered a valid palindrome</li>
            </ul>
          </div>

          <div className="kata-detail-page__section-block">
            <h2>Notes</h2>
            <ul className="kata-detail-page__list">
              <li>You can normalize the string by:</li>
              <li>Converting it to lowercase</li>
              <li>Removing non-alphanumeric characters</li>
            </ul>
          </div>
        </section>

        <div className="kata-detail-page__right-column">
          <section
            className={`kata-detail-page__accordion ${openSections.approach ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="kata-detail-page__accordion-trigger"
              onClick={() => toggleSection("approach")}
              aria-expanded={openSections.approach}
              aria-controls="accordion-approach-panel"
              id="accordion-approach-trigger"
            >
              <span>My Approach</span>
              <span className="kata-detail-page__accordion-icon">
                {openSections.approach ? "−" : "+"}
              </span>
            </button>
            {openSections.approach && (
              <div
                id="accordion-approach-panel"
                className="kata-detail-page__accordion-panel"
                role="region"
                aria-labelledby="accordion-approach-trigger"
              >
                <p>
                  Use two pointers or normalize the string and compare
                  characters while ignoring non-alphanumeric values.
                </p>
              </div>
            )}
          </section>

          <section
            className={`kata-detail-page__accordion ${openSections.solution ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="kata-detail-page__accordion-trigger"
              onClick={() => toggleSection("solution")}
              aria-expanded={openSections.solution}
              aria-controls="accordion-solution-panel"
              id="accordion-solution-trigger"
            >
              <span>My Solution</span>
              <span className="kata-detail-page__accordion-icon">
                {openSections.solution ? "−" : "+"}
              </span>
            </button>
            {openSections.solution && (
              <div
                id="accordion-solution-panel"
                className="kata-detail-page__accordion-panel"
                role="region"
                aria-labelledby="accordion-solution-trigger"
              >
                <p>Solution details will appear here when unlocked.</p>
              </div>
            )}
          </section>

          <section
            className={`kata-detail-page__accordion kata-detail-page__accordion--secondary ${openSections.tests ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="kata-detail-page__accordion-trigger kata-detail-page__accordion-trigger--secondary"
              onClick={() => toggleSection("tests")}
              aria-expanded={openSections.tests}
              aria-controls="accordion-tests-panel"
              id="accordion-tests-trigger"
            >
              <span>Tests</span>
              <span className="kata-detail-page__accordion-icon">
                {openSections.tests ? "−" : "+"}
              </span>
            </button>
            {openSections.tests && (
              <div
                id="accordion-tests-panel"
                className="kata-detail-page__accordion-panel"
                role="region"
                aria-labelledby="accordion-tests-trigger"
              >
                <p>Tests have not been run yet.</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </section>
  );
};

export default KatasDetailPage;
