import "./Home.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProgressSummary from "../../components/ProgressSummary/ProgressSummary";
import CategoryProgress from "../../components/CategoryProgress/CategoryProgress";

const Home = () => {
  return (
    <section className="page-shell">
      <PageHeader
        heading="Solve. Test. Refactor. Repeat."
        subheading="A collection of JavaScript & TypeScript problems I'm solving to
        strengthen my problem-solving and language fundamentals."
      />
      <ProgressSummary />
      <CategoryProgress />
    </section>
  );
};

export default Home;
