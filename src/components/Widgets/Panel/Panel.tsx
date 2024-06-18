import type { Panel as PanelProp } from "../../../services/Manganato/manganatoTypes";
import { mangaApiUrl } from "../../../utilities/config";

export const Panel = ({ panel }: { panel: PanelProp }) => {
  const { title, image_url } = panel;
  const proxyImage = `${mangaApiUrl}/proxy/${image_url}`;
  return <img src={proxyImage} alt={title} title={title} className="manga-panel" />;
};
