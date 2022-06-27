import ListGroup from './Common/ListGroup'

/* 
CourseStudents passes unique params to Common component ListGroup
to display all of the students in one course. 
*/

const CourseStudents = ({ selectedCourse, students, onStudentSelect }) => {
	return (
		<section>
			<ListGroup
				title={`Students (${selectedCourse})`}
				items={students}
				textProperties={['studentName']}
				valueProperty={'studentName'}
				onItemSelect={onStudentSelect}
			/>
		</section>
	)
}

export default CourseStudents
