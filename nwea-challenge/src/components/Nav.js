const Nav = ({
	selectedCourse,
	selectedStudent,
	onClassesClick,
	onStudentsClick
}) => {
	return (
		<ul>
			<li onClick={onClassesClick}>Classes </li>
			{selectedCourse && <li onClick={onStudentsClick}>Students</li>}
			{selectedStudent && <li>Tests</li>}
		</ul>
	)
}

export default Nav
