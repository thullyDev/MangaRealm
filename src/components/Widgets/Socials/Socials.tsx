import { getValues } from "../../../services/MangaRealm.api/admin/handlers";
import type { ListItem } from "../LinkList/LinkList";

const values = await getValues()

const socials = [
  {
    name: <i className="fab fa-reddit"></i>,
    link: values.socials.reddit.value,
  },
  {
    name: <i className="fab fa-twitter"></i>,
    link: values.socials.twitter.value,
  },
  {
    name: <i className="fab fa-discord"></i>,
    link: values.socials.discord.value,
  },
  {
    name: <i className="fa-solid fa-envelope"></i>,
    link: values.inputs.email.value,
  },
  {
    name: <i className="fas fa-donate"></i>,
    link: values.socials.donate.value,
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
