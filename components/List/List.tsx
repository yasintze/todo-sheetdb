import { IList } from "./IList";

const List = ({ data, handleDelete }: { data: IList[]; handleDelete: any }) => {
  return (
    <ul className="list-group">
      {data.map((item, index) => (
        <li
          key={`item-${index}`}
          className="list-group-item list-group-item-action d-flex justify-content-between"
        >
          {item?.title}
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={() => handleDelete(item?.title)}
          >
            Done
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
