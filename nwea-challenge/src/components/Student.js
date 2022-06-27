import ListGroup from './Common/ListGroup'
/* 
Student passes unique params to Common component ListGroup
to display one, single student's info (name and tests). 
*/
const Student = ({ selectedCourse, student }) => {
	return (
		<section>
			<ListGroup
				title={`${student.studentName} (${selectedCourse} Test Scores)`}
				items={student.tests}
				textProperties={['testName', 'testScore']}
				valueProperty={'testName'}
				onItemSelect={null}
				action={false}
			/>
		</section>
	)
}

export default Student
