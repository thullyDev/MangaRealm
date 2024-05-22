export interface ListItem {
  name: string | JSX.Element;
  link: string;
}

export interface LinkListProps {
  items: ListItem[];
  className: string;
}

export function LinkList({ items, className }: LinkListProps) {
  return (
    <ul className={className}>
      {items.map((item: ListItem, index: number) => (
        <li key={index} className={`${className}-items`}>
          <a href={item.link} className="block w-full px-5 py-1 transition ease-out hover:bg-gray-900 duration-900 hover:text-white text-gray-400 text-sm">{item.name}</a>
        </li>
      ))}
    </ul> //  ease-out 
  );
}
