import type { Panel as PanelProp } from "../../../services/Manganato/manganatoTypes"
import { mangaApiUrl } from "../../../utilities/config"


export const Panel = ({ panel }: { panel: PanelProp } ) => {
	const { title, image_url } = panel
	const encodedImageUrl = atob(image_url)
	const proxyImage = `${mangaApiUrl}?img=${encodedImageUrl}&atob=true`
	console.log({ proxyImage })
	return (
		<img src={image_url} alt={title} className="manga-panel"/>
	)
} 

