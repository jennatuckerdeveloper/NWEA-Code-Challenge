const CourseStudents = ({ students, onStudentSelect }) => {
	return (
		<section>
			<h1>Students</h1>
			<ul>
				{students.map((student) => (
					<li
						key={student.studentName}
						onClick={() => onStudentSelect(student.studentName)}>
						{student.studentName}
					</li>
				))}
			</ul>
		</section>
	)
}

export default CourseStudents
