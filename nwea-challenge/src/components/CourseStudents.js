import ListGroup from './Common/ListGroup'
const CourseStudents = ({ students, onStudentSelect }) => {
	return (
		<section>
			<ListGroup
				title={'Students'}
				items={students}
				textProperties={['studentName']}
				valueProperty={'studentName'}
				onItemSelect={onStudentSelect}
			/>
		</section>
	)
}

export default CourseStudents
