import StudentTests from './StudentTests'

const Student = ({ student }) => {
	return (
		<section>
			<h1>{student.studentName}</h1>
			<StudentTests tests={student.tests} />
		</section>
	)
}

export default Student
