import "./KatasDetailPage.css";
import katas from "../../data/kataData";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import KataProblem from "../../components/KataDetail/KataProblem/KataProblem";
import KataAccordion from "../../components/KataDetail/KataAccordion/KataAccordion";

const KatasDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const kataMetaData = slug
    ? katas.find((kata) => kata.slug === slug)
    : undefined;

  if (!kataMetaData) {
    return (
      <section className="page-shell kata-detail-page kata-detail-page--empty">
        <div className="kata-detail-page__empty-state">
          <Link className="kata-detail-page__back-link" to="/katas">
            <ArrowLeft size={15} aria-hidden="true" />
            All Katas
          </Link>
          <span className="kata-detail-page__empty-label">Challenge</span>
          <h1>Kata not found</h1>
          <p>The challenge may have moved or the link may be incorrect.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell kata-detail-page">
      <header className="kata-detail-page__header">
        <Link className="kata-detail-page__back-link" to="/katas">
          <ArrowLeft size={15} aria-hidden="true" />
          All Katas
        </Link>
        <div className="kata-detail-page__eyebrow">Challenge</div>
        <div className="kata-detail-page__meta">
          <h1>{kataMetaData.title}</h1>
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
        <KataProblem kata={kataMetaData} />

        <KataAccordion slug={kataMetaData.slug} />
      </main>
    </section>
  );
};

export default KatasDetailPage;
