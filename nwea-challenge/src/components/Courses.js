import ListGroup from './Common/ListGroup'

/* 
Courses passes unique params to Common component ListGroup
to display all the courses. 
*/

const Courses = ({ courses, onCourseSelect }) => {
	return (
		<section>
			<ListGroup
				title={'Courses'}
				items={courses}
				textProperties={['className']}
				valueProperty={'className'}
				onItemSelect={onCourseSelect}
			/>
		</section>
	)
}

export default Courses
