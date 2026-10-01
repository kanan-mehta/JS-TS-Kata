import KataAccordionItem from "../KataAccordion/KataAccordionItem";

const KataApproach = ({ steps }: { steps: string[] }) => {
  return (
    <KataAccordionItem
      title="My Approach"
      id="approach"
      modifierClass="kata-detail-page__accordion--approach"
      triggerModifierClass="kata-detail-page__accordion-trigger--approach"
    >
      <div
        id="accordion-approach-panel"
        className="kata-detail-page__accordion-panel"
        role="region"
        aria-labelledby="accordion-approach-trigger"
      >
        <ol>
          {steps.map((step, index) => {
            return <li key={index}>{step}</li>;
          })}
        </ol>
      </div>
    </KataAccordionItem>
  );
};

export default KataApproach;
