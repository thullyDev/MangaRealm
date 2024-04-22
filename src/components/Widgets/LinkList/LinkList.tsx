interface ListItem {
  name: string | JSX.Element;
  link: string;
}

interface LinkListProps {
  items: ListItem[];
  className: string;
}

export function LinkList({ items, className }: LinkListProps) {
  return (
    <ul className={className}>
      {items.map((item: ListItem, index: number) => (
        <li key={index} className={`${className}-items`}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
