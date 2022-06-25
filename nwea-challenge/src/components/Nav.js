const Nav = ({
	selectedCourse,
	selectedStudent,
	onClassesClick,
	onStudentsClick
}) => {
	return (
		<nav>
			<ul>
				<li onClick={onClassesClick}>Classes </li>
				{selectedCourse && <li onClick={onStudentsClick}>Students</li>}
				{selectedCourse && selectedStudent && <li>Tests</li>}
			</ul>
		</nav>
	)
}

export default Nav
