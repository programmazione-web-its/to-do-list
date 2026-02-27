import pencilIcon from "../assets/pencil.svg";
import trashIcon from "../assets/trash.svg";

function List({ listElements }) {
  const iconStyle = {
    backgroundColor: "#f6f6f6",
    color: "red",
    width: 20,
    padding: "1rem",
    borderRadius: "100%",
  };

  function handleClick(pulsante) {
    console.log("Click sul pulsante ", pulsante)
  }

  return (
    <ul className="list">
      {listElements.map((element, i) => (
        <li className={`list-item ${i === 2 ? 'bg-red': 'bg-green'}`} key={i}>
          {element}
          <img onClick={()=>handleClick(element)} style={iconStyle} src={pencilIcon} />
          <img style={iconStyle} src={trashIcon} />
        </li>
      ))}
    </ul>
  );
}

export default List;
