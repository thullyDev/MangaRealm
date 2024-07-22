import { Admin } from "./admin";
import type { _Scripts, _Settings, _Values } from "./types";

const admin = Admin.getInstance()

export async function getDisabledAnimes(): Promise<Record<string, any>> {
    const siteData = await admin.getSiteData();
    return siteData.disabled_animes;
}

export async function getValues(): Promise<_Values> {
    const siteData = await admin.getSiteData();
    return siteData.values;
}

export async function getScripts(): Promise<_Scripts> {
    const siteData = await admin.getSiteData();
    return siteData.scripts;
}

export async function getSettings(): Promise<_Settings> {
    const siteData = await admin.getSiteData();
    return siteData.settings;
}

export function restartAdmin() {
    admin.adminShouldRestart(true)
}