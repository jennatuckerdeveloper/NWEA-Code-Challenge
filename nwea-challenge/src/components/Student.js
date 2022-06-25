import ListGroup from './Common/ListGroup'
/* 
Student passes unique params to Common component ListGroup
to display one, single student's info (name and tests). 
*/
const Student = ({ student }) => {
	return (
		<section>
			<ListGroup
				title={student.studentName}
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
