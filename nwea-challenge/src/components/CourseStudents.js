const CourseStudents = ({ students, onStudentSelect }) => {
	return (
		<ul>
			{students.map((student) => (
				<li
					key={student.studentName}
					onClick={() => onStudentSelect(student.studentName)}>
					{student.studentName}
				</li>
			))}
		</ul>
	)
}

export default CourseStudents
