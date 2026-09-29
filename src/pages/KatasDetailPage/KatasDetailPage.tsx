import { useState } from "react";
import "./KatasDetailPage.css";
import katas from "../../data/kataData";
import { useParams } from "react-router-dom";
import { getKataAssests } from "../../lib/kataAssets";

type AccordionSection = "approach" | "solution" | "tests";

const KatasDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openSections, setOpenSections] = useState<
    Record<AccordionSection, boolean>
  >({
    approach: true,
    solution: true,
    tests: true,
  });

  const kataMetaData = slug
    ? katas.find((kata) => kata.slug === slug)
    : undefined;

  if (!kataMetaData) {
    return (
      <section className="page-shell kata-detail-page kata-detail-page--empty">
        <div className="kata-detail-page__empty-state">
          <span className="kata-detail-page__empty-label">Challenge</span>
          <h1>Kata not found</h1>
          <p>The challenge may have moved or the link may be incorrect.</p>
        </div>
      </section>
    );
  }
  const assets = getKataAssests(kataMetaData.slug);

  const toggleSection = (section: AccordionSection) => {
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
          <h1>{kataMetaData.title}</h1>
          <span className="kata-detail-page__difficulty">Easy</span>
        </div>
        <div className="kata-detail-page__concepts" aria-label="Concepts">
          {kataMetaData.concepts.map((concept, index) => {
            return (
              <span className="kata-detail-page__concept" key={index}>
                {concept}
              </span>
            );
          })}
        </div>
      </header>

      <main className="kata-detail-page__content">
        <section className="kata-detail-page__panel">
          <div className="kata-detail-page__section-block">
            <h2>Problem</h2>
            <p>{kataMetaData.description}</p>
          </div>

          {kataMetaData.examples && kataMetaData.examples.length > 0 && (
            <div className="kata-detail-page__section-block">
              <h2>Examples</h2>
              <pre className="kata-detail-page__code">
                {kataMetaData.examples.map((example) => {
                  return <code key={example.id}>{example.code}</code>;
                })}
              </pre>
            </div>
          )}

          {kataMetaData.constraints && kataMetaData.constraints.length > 0 && (
            <div className="kata-detail-page__section-block">
              <h2>Constraints</h2>
              <ul className="kata-detail-page__list">
                {kataMetaData.constraints.map((constraint, index) => {
                  return <li key={index}>{constraint}</li>;
                })}
              </ul>
            </div>
          )}

          {kataMetaData.notes && kataMetaData.notes.length > 0 && (
            <div className="kata-detail-page__section-block">
              <h2>Notes</h2>
              <ul className="kata-detail-page__list">
                {kataMetaData.notes.map((note, index) => {
                  return <li key={index}>{note}</li>;
                })}
              </ul>
            </div>
          )}
        </section>

        <div className="kata-detail-page__right-column">
          <section
            className={`kata-detail-page__accordion kata-detail-page__accordion--approach ${openSections.approach ? "is-open" : ""}`}
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
                <ol>
                  {assets.approach.steps.map((step, index) => {
                    return <li key={index}>{step}</li>;
                  })}
                </ol>
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
                <pre>
                  <code>{assets.solutionCode}</code>
                </pre>
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
              </div>
            )}
          </section>
        </div>
      </main>
    </section>
  );
};

export default KatasDetailPage;
