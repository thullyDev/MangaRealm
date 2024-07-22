import { getValues } from "../../../services/MangaRealm.api/admin/handlers"

const values = await getValues()
const siteNotice = values.inputs.site_notice.value

export const NoticeBar = () => {
  if (siteNotice == "") {
    return (
      <></>
    )
  }

	return (
		<div className="outer-notice-bar">
			<div className="notice-bar bg-zinc-800 rounded w-full py-2">
				<p className="notice-bar-text text-center">{siteNotice}</p>
			</div>
		</div>
	)
}