import type { Kata } from "../../../data/kataData";
import "./KataProblem.css";

type KataProblemProps = {
  kata: Kata;
};

const KataProblem = ({ kata }: KataProblemProps) => {
  return (
    <section className="kata-detail-page__panel">
      <div className="kata-detail-page__section-block">
        <h2>Problem</h2>
        <p>{kata.description}</p>
      </div>

      {kata.examples && kata.examples.length > 0 && (
        <div className="kata-detail-page__section-block">
          <h2>Examples</h2>
          <pre className="kata-detail-page__code">
            {kata.examples.map((example) => {
              return <code key={example.id}>{example.code}</code>;
            })}
          </pre>
        </div>
      )}

      {kata.constraints && kata.constraints.length > 0 && (
        <div className="kata-detail-page__section-block">
          <h2>Constraints</h2>
          <ul className="kata-detail-page__list">
            {kata.constraints.map((constraint, index) => {
              return <li key={index}>{constraint}</li>;
            })}
          </ul>
        </div>
      )}

      {kata.notes && kata.notes.length > 0 && (
        <div className="kata-detail-page__section-block">
          <h2>Notes</h2>
          <ul className="kata-detail-page__list">
            {kata.notes.map((note, index) => {
              return <li key={index}>{note}</li>;
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export default KataProblem;
