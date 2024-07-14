import { Admin } from "./admin";

const admin = Admin.getInstance()

export async function getDisabledAnimes(): Promise<Record<string, any>> {
    const siteData = await admin.getSiteData();
    return siteData.disabled_animes;
}

export async function getValues(): Promise<Record<string, any>> {
    const siteData = await admin.getSiteData();
    return siteData.values;
}

export async function getScripts(): Promise<Record<string, any>> {
    const siteData = await admin.getSiteData();
    return siteData.scripts;
}

export async function getSettings(): Promise<Record<string, any>> {
    const siteData = await admin.getSiteData();
    return siteData.settings;
}

export function restartAdmin() {
    admin.adminShouldRestart(true)
}