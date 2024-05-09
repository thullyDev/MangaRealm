 import { ApiHandler } from "../../utilities/handlers/apiHandler"
 import { mangaApiUrl } from "../../utilities/config"


 const api = new ApiHandler(mangaApiUrl)

export async function getFeatures() {
	const data = await api.get("/top")

	console.log({ data })

	return data
}
