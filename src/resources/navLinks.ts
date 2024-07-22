interface NavItem {
  name: string;
  link: string;
}

export const navs: NavItem[] = [
  {
    name: "Popular",
    link: "/filter?type=topview",
  },
  {
    name: "Recent",
    link: "/filter",
  },
  {
    name: "Complete",
    link: "/filter?status=completed",
  },
  {
    name: "Ongoings",
    link: "/filter?status=ongoing",
  },
  {
    name: "Newest",
    link: "/filter?_type=newest",
  },
  {
    name: "Random",
    link: "/random",
  },
];
