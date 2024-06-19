const referenceLinks = [
  {
    name: "Contact Us",
    link: "#contact",
  },
  {
    name: "Help and FAQ",
    link: "#help",
  },
  {
    name: "Request",
    link: "#request",
  },
  {
    name: "Terms and Service",
    link: "#terms",
  },
];

export const ReferenceLinks = () => {
  return (
    <nav className="reference-links-con my-6">
      <ul className="flex justify-center gap-5">
        {referenceLinks.map((item: ListItem, index: number) => (
          <li key={index}>
            <a href={item.link} className="text-sm text-zinc-400 hover:text-white transition duration-1000 ease-in-out">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
