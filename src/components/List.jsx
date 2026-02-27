function List({listElements}) {
    return (
        <ul>
           {listElements.map((element, i) => (
            <li key={i}>{element}</li>
           ) )}         
        </ul>
    )
}

export default List
