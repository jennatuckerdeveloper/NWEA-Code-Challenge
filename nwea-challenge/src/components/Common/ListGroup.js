/*
  ListGroup is a common, reusable component that defines a clean
  interface for displaying lists of items.  

  The component makes use of bracket notation to allow a generic 
  concept of an item to access many types of object. 

  The action param has a default value of true that determines the 
  CSS styles and enables hover, disabled, and active states.

  The textProperties param expects an array and dynamically renders
  a row of columns to allow for more than one item property to show.
*/

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
				{items.map((item) => {
					return (
						<li
							className={listItemClass}
							key={item[valueProperty]}
							onClick={
								onItemSelect ? () => onItemSelect(item[valueProperty]) : null
							}>
							<div className='row'>
								{textProperties.map((property, i) => (
									<div key={i} className='col'>
										{item[property]}
									</div>
								))}
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default ListGroup
