import { LinkList } from "../../Widgets/LinkList/LinkList"

const referenceLinks = [
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "Help and FAQ",
    link: "/help",
  },
  {
    name: "Request",
    link: "/request",
  },
  {
    name: "Terms and Service",
    link: "/terms",
  },
];

export const ReferenceLinks = () => {
  return (
    <nav className="reference-links-con">
      <LinkList items={referenceLinks} className="reference-links-list" />
    </nav>
  )
}
