import { getKataAssets } from "../../../lib/kataAssets";
import KataApproach from "../KataApproach/KataApproach";
import KataSolution from "../KataSolution/KataSolution";
import KataTests from "../KataTests/KataTests";

const KataAccordion = ({ slug }: { slug: string }) => {
  const assets = getKataAssets(slug);

  return (
    <div className="kata-detail-page__right-column">
      <KataApproach steps={assets.approach.steps} />
      <KataSolution solutionCode={assets.solutionCode} />
      <KataTests assets={assets} />
    </div>
  );
};

export default KataAccordion;
