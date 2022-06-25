const Course = ({ courseName, onCourseSelect }) => {
	return <li onClick={() => onCourseSelect(courseName)}>{courseName}</li>
}

export default Course
