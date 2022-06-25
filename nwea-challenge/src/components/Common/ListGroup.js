const ListGroup = ({
	title,
	items,
	textProperties,
	valueProperty,
	onItemSelect,
	action = true
}) => {
	const listItemClass = action
		? 'list-group-item list-group-item-action '
		: 'list-group-item'
	return (
		<div>
			<h1>{title}</h1>
			<ul className='list-group'>
				{items.map((item) => (
					<li
						className={listItemClass}
						key={item[valueProperty]}
						onClick={() => onItemSelect(item[valueProperty])}>
						<div className='row'>
							{textProperties.map((property) => (
								<div className='col'> {item[property]}</div>
							))}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ListGroup
