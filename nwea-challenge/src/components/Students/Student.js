const Student = ({ studentName, onStudentSelect }) => {
	return (
		<li
			className='list-group-item list-group-item-action'
			onClick={() => onStudentSelect(studentName)}>
			{studentName}
		</li>
	)
}

export default Student
