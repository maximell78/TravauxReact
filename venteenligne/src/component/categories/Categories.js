function Categories(props) {
    return (
        <div>
            {props.categories.map(({id, name}) => (
                <div key={id}>{name}</div>
            ))}
        </div>
    )
}

export default Categories;