import { Cache } from '../../database/Cache/cache.ts'


const cache = new Cache()


interface SiteData {
    [key: string]: any;
}

export class Admin {
    private static instance: Admin;
    private adminNeedsRestarting: boolean;
    private siteData: SiteData | null = null;

    private constructor() {
        this.adminNeedsRestarting = true;
    }

    public static getInstance(): Admin {
        if (!Admin.instance) {
            Admin.instance = new Admin();
        }
        return Admin.instance;
    }

    public adminShouldRestart(state: boolean) {
    	this.adminNeedsRestarting = state
    }

    private async getSiteData(): Promise<SiteData> {
    	if (this.adminNeedsRestarting == true || this.siteData == null) {
        	return await this.getFreshSiteData()
		}

		return this.siteData || this.getDefaultSiteData()
	}

    private async getFreshSiteData(): Promise<SiteData> {
        this.adminNeedsRestarting = false
        const siteData = await cache.hget("site_data");

        if (!siteData) {
        	return this.getDefaultSiteData()
		}

        this.siteData = siteData

        return siteData;
    }

    private getDefaultSiteData(): SiteData {
        const data = {
            scripts: {
                head_scripts: {
                    global_head: { name: "global_head", value: "" },
                    home_head: { name: "home_head", value: "" },
                    filter_head: { name: "filter_head", value: "" },
                    profile_head: { name: "profile_head", value: "" },
                    read_head: { name: "read_head", value: "" },
                    chapter_head: { name: "chapter_head", value: "" },
                },
                foot_scripts: {
                    global_foot: { name: "global_foot", value: "" },
                    home_foot: { name: "home_foot", value: "" },
                    filter_foot: { name: "filter_foot", value: "" },
                    profile_foot: { name: "profile_foot", value: "" },
                    read_foot: { name: "read_foot", value: "" },
                    chapter_foot: { name: "chapter_foot", value: "" },
                },
                ads_scripts: {
                    top_advertisement: { name: "top_advertisement", value: "", height: "0px" },
                    bottom_advertisement: { name: "bottom_advertisement", value: "", height: "0px" },
                    under_slider_advertisement: { name: "under_slider_advertisement", value: "", height: "0px" },
                    above_comments_advertisement: { name: "above_comments_advertisement", value: "", height: "0px" },
                },
            },
            values: {
                images: {
                    site_logo: { name: "site_logo", value: "/site-logo.png" },
                    favicon_logo: { name: "favicon_logo", value: "/favicon.png" },
                    alert: { name: "alert", value: "/alert.gif" },
                    maintenance: { name: "maintenance", value: "/maintenance.gif" },
                    empty: { name: "empty", value: "/empty.gif" },
                    authentication_background: { name: "authentication_background", value: "/auth-bg-image.png" },
                    default_account_image: { name: "default_account_image", value: "/default-img.jpeg" },
                },
                inputs: {
                    site_name: { value: "MangaRealm", name: "site_name" },
                    email: { value: "", name: "email" },
                    title: { value: "Read Manga On MangaRealm For No ads", name: "title" },
                    site_description: {
                        value: "Best website to Read Manga online. We have the biggest library of over 200,000 manga available for Free download. Read Manga now!",
                        name: "site_description",
                        type: "field",
                    },
                    site_notice: {
                        value: "",
                        name: "site_notice",
                        type: "field",
                    },
                },
                socials: {
                    discord: { value: "https://discord.com/", name: "discord" },
                    twitter: { value: "https://twitter.com/", name: "twitter" },
                    reddit: { value: "https://reddit.com/", name: "reddit" },
                    donate: { value: "https://ko-fi.com/", name: "donate" },
                },
            },
            settings: {
                maintanence: { name: "maintanence", value: false },
                dev_tools_detection: { name: "dev_tools_detection", value: false },
                adblocker_detection: { name: "adblocker_detection", value: false },
                authentication: { name: "authentication", value: true },
                manga: { name: "manga", value: true },
                read: { name: "read", value: true },
                random: { name: "random", value: true },
                comments: { name: "comments", value: true },
                add_list: { name: "add_list", value: true },
                user: { name: "user", value: true },
                features: { name: "features", value: true },
                footer: { name: "footer", value: true },
                title: { name: "title", value: true },
                donation: { name: "donation", value: true },
                socials: { name: "socials", value: true },
                contact: { name: "contact", value: true },
            },
            disabled_animes: {},
        };

        this.siteData = data
        cache.hset("site_data", data);

        return data
    }

    public async getDisabledAnimes(): Promise<Record<string, any>> {
        const siteData = await this.getSiteData();
        return siteData.disabled_animes;
    }

    public async getValues(): Promise<Record<string, any>> {
        const siteData = await this.getSiteData();
        return siteData.values;
    }

    public async getScripts(): Promise<Record<string, any>> {
        const siteData = await this.getSiteData();
        return siteData.scripts;
    }

    public async getSettings(): Promise<Record<string, any>> {
        const siteData = await this.getSiteData();
        return siteData.settings;
    }

}
