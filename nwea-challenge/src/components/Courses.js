import ListGroup from './Common/ListGroup'
const AllCourses = ({ courses, onCourseSelect }) => {
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

export default AllCourses
