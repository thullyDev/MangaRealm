import { getSettings, getValues } from "../../../services/MangaRealm.api/admin/handlers";
import type { ListItem } from "../LinkList/LinkList";

const values = await getValues()
const settings = await getSettings()
const disableDonate = settings.donation.value
const disableSocials = settings.socials.value
const disableEmail = settings.contact.value

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
];

if (disableDonate == true) {
  socials.push(
    {
      name: <i className="fas fa-donate"></i>,
      link: values.socials.donate.value,
    })
}

if (disableEmail == true) {
  socials.push(
  {
    name: <i className="fa-solid fa-envelope"></i>,
    link: values.inputs.email.value,
  })
}

export const Socials = () => {
  if (disableSocials == true) {
    return (
      <></>
    )
  }

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
