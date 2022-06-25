import ListGroup from './Common/ListGroup'

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
