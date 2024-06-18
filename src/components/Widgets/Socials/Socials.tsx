import type { ListItem } from "../LinkList/LinkList";

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
      <ul className="flex gap-5">
        {socials.map((item: ListItem, index: number) => (
          <li key={index}>
            <a href={item.link} className="hover:text-white transition duration-1000 ease-in-out">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
