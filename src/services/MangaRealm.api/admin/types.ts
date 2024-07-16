interface _Item {
    value: string;
    name: string;
} 

interface _AdscriptItem extends _Item {
    height: string;
}

interface _FieldItem extends _Item {
    type: string;
}

interface _HeadScript {
    global_head: _Item;
    home_head: _Item;
    filter_head: _Item;
    profile_head: _Item;
    read_head: _Item;
    chapter_head: _Item;
}

interface _FootScript {
    global_foot: _Item;
    home_foot: _Item;
    filter_foot: _Item;
    profile_foot: _Item;
    read_foot: _Item;
    chapter_foot: _Item;
}

interface _AdsScript {
    top_advertisement: _AdscriptItem;
    bottom_advertisement: _AdscriptItem;
    under_slider_advertisement: _AdscriptItem;
    above_comments_advertisement: _AdscriptItem;
}

interface _Images {
    site_logo: _Item;
    favicon_logo: _Item;
    alert: _Item;
    authentication_background: _Item;
    default_account_image: _Item;
}

interface _Inputs {
    site_name: _Item,
    email: _Item,
    title: _Item,
    site_description: _FieldItem,
    site_notice: _FieldItem,
}

interface _Socials {
    discord: _Item,
    twitter: _Item,
    reddit: _Item,
    donate: _Item,
}

interface _SettingsItem {
    name: string;
    value: boolean;
}

export interface _Scripts {
    head_scripts: _HeadScript;
    foot_scripts: _FootScript;
    ads_scripts: _AdsScript;
}


export interface _Values {
    images: _Images;
    inputs: _Inputs;
    socials: _Socials;
}

export interface _Settings {
    maintanence: _SettingsItem,
    dev_tools_detection: _SettingsItem,
    adblocker_detection: _SettingsItem,
    authentication: _SettingsItem,
    manga: _SettingsItem,
    read: _SettingsItem,
    random: _SettingsItem,
    comments: _SettingsItem,
    add_list: _SettingsItem,
    user: _SettingsItem,
    features: _SettingsItem,
    footer: _SettingsItem,
    title: _SettingsItem,
    donation: _SettingsItem,
    socials: _SettingsItem,
    contact: _SettingsItem,
}

export interface SiteData {
    scripts: _Scripts;
    values: _Values;
    settings: _Settings;
    disabled_animes: Record<string, any>;
}

