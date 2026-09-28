import KatasList from "../../components/KatasList/KatasList";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchControlBar from "../../components/SearchControlBar/SearchControlBar";

const KatasPage = () => {
  return (
    <section className="page-shell">
      <PageHeader heading="All Katas" subheading="All Katas" />
      <SearchControlBar />
      <KatasList />
    </section>
  );
};

export default KatasPage;
