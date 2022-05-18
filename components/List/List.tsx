const List = ({ data }: { data: String[] }) => {
  return (
    <ul className="list-group">
      {data.map((item, index) => (
        <li key={`item-${index}`} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
