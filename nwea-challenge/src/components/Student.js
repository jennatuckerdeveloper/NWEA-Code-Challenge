const Student = ({ student }) => {
	return (
		<section>
			<h5>{student.studentName}</h5>
			<ul>
				{student.tests.map((test, i) => (
					<li key={i}>
						{test.testName} {test.testScore}
					</li>
				))}
			</ul>
		</section>
	)
}

export default Student
