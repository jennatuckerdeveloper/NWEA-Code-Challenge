const Course = ({ courseName, onCourseSelect }) => {
	return (
		<li
			className='list-group-item list-group-item-action'
			onClick={() => onCourseSelect(courseName)}>
			{courseName}
		</li>
	)
}

export default Course
