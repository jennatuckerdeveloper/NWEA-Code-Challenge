import Student from './Student'
const CourseStudents = ({ students, onStudentSelect }) => {
	return (
		<section>
			<h1>Students</h1>
			<ul className='list-group'>
				{students.map((student) => (
					<Student
						key={student.studentName}
						onStudentSelect={onStudentSelect}
						studentName={student.studentName}
					/>
				))}
			</ul>
		</section>
	)
}

export default CourseStudents
