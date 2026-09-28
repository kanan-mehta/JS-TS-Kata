import { useParams } from "react-router-dom";
import getCategoryMeta from "../../data/kataCategoryData";
import KatasList from "../../components/KatasList/KatasList";
import PageHeader from "../../components/PageHeader/PageHeader";

const KatasCategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  if (!categorySlug) {
    return <p>Category not found.</p>;
  }

  const category = getCategoryMeta(categorySlug);

  return (
    <section className="page-shell">
      <PageHeader heading={category.name} subheading={category.description} />
      <KatasList category={category.categorySlug} />
    </section>
  );
};

export default KatasCategoryPage;
