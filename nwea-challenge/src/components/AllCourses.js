import Course from './Course'

const AllCourses = ({ courses, onCourseSelect }) => {
	return (
		<section>
			<h1>Courses</h1>
			<ul>
				{courses.map((course) => (
					<Course
						key={course.className}
						courseName={course.className}
						onCourseSelect={onCourseSelect}
					/>
				))}
			</ul>
		</section>
	)
}

export default AllCourses
