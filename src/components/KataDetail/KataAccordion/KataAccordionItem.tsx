import { useState, type ReactNode } from "react";
import "./KataAccordion.css";

export interface KataAccordionItemProps {
  id: string;
  title: string;
  defaultOpen?: boolean;
  modifierClass?: string;
  triggerModifierClass?: string;
  children: ReactNode;
}

const KataAccordionItem = ({
  id,
  title,
  defaultOpen = true,
  modifierClass = "",
  triggerModifierClass = "",
  children,
}: KataAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const panelId = `accordion-${id}-panel`;
  const triggerId = `accordion-${id}-trigger`;

  return (
    <section
      className={`kata-detail-page__accordion ${modifierClass} ${isOpen ? "is-open" : ""}`}
    >
      <button
        type="button"
        className={`kata-detail-page__accordion-trigger ${triggerModifierClass}`.trim()}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={triggerId}
      >
        <span>{title}</span>
        <span className="kata-detail-page__accordion-icon">
          {isOpen ? "−" : "＋"}
        </span>
      </button>
      {isOpen && (
        <div
          id={panelId}
          className="kata-detail-page__accordion-panel"
          role="region"
          aria-labelledby={triggerId}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default KataAccordionItem;
