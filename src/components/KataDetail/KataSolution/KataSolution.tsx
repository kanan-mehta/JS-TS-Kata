import KataAccordionItem from "../KataAccordion/KataAccordionItem";

interface KataSolutionProps {
  solutionCode: string;
}

const KataSolution = ({ solutionCode }: KataSolutionProps) => {
  return (
    <KataAccordionItem
      title="My Solution"
      id="solution"
      modifierClass="kata-detail-page__accordion--solution"
      triggerModifierClass="kata-detail-page__accordion-trigger--solution"
    >
      <div
        id="accordion-solution-panel"
        className="kata-detail-page__accordion-panel"
        role="region"
        aria-labelledby="accordion-solution-trigger"
      >
        <pre>
          <code>{solutionCode}</code>
        </pre>
      </div>
    </KataAccordionItem>
  );
};

export default KataSolution;
