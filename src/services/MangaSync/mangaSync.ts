import { SUCCESSFUL } from "../../utilities/errors";
import { ApiHandler } from "../../utilities/handlers/apiHandler";

const api = new ApiHandler("https://api.malsync.moe/page/MangaNato/");

// https://api.malsync.moe/page/MangaNato/manga-va953509

export async function getMalID(slug: string) {
  const data = await api.get(slug);

  if (data.status != SUCCESSFUL) return null;

  return data.data.malId;
}
