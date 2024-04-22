import { LinkList } from "../../Widgets/LinkList/LinkList"

const socials = [
  {
    name: <i className="fab fa-instagram"></i>,
    link: "https://www.instagram.com/",
  },
  {
    name: <i className="fab fa-reddit"></i>,
    link: "https://www.reddit.com/",
  },
  {
    name: <i className="fab fa-facebook"></i>,
    link: "https://www.facebook.com/",
  },
  {
    name: <i className="fab fa-discord"></i>,
    link: "https://discord.com/",
  },
];


export const Socials = () => {
  return (
      <nav className="socials-con">
        <LinkList items={socials} className="socials-list" ></LinkList>
      </nav>
  )
} 