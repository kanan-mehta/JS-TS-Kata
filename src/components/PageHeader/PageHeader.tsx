import "./PageHeader.css";

type PageHeaderProps = {
  heading: string;
  subheading: string;
};
const PageHeader = ({ heading, subheading }: PageHeaderProps) => {
  return (
    <header className="page-header">
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </header>
  );
};

export default PageHeader;
