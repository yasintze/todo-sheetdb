import { IList } from "./IList";

const List = ({ data }: { data: IList[] }) => {
  return (
    <ul className="list-group">
      {data.map((item, index) => (
        <li key={`item-${index}`} className="list-group-item">
          {item?.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
