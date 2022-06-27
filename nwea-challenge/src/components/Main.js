import Courses from './Courses'
import CourseStudents from './CourseStudents'
import Student from './Student'

// Main controls the conditional rendering of components with derived values computed from state.
const Main = ({
	courses,
	selectedCourse,
	onCourseSelect,
	selectedStudent,
	onStudentSelect
}) => {
	// Derived state from courses called when user has selected course.
	const getStudents = () => {
		const chosenCourse = courses.find(
			(course) => course.className === selectedCourse
		)
		return chosenCourse ? chosenCourse.students : null
	}

	// If selectedCourse, get specific course's students.
	const students = selectedCourse ? getStudents() : null

	// Derived state from courses when user selects course AND student.
	const getStudent = (students) => {
		const student = students.find(
			(student) => student.studentName === selectedStudent
		)
		return student ? student : null
	}

	// If selectedCourse and selectedStudent, get specific student's info.
	const student =
		selectedCourse && selectedStudent ? getStudent(students) : null

	return (
		// Conditionally render 1 of 3 components.
		<main className='main p-2'>
			{!selectedCourse && !selectedStudent && (
				<Courses courses={courses} onCourseSelect={onCourseSelect} />
			)}
			{selectedCourse && !selectedStudent && (
				<CourseStudents
					selectedCourse={selectedCourse}
					students={students}
					onStudentSelect={onStudentSelect}
				/>
			)}
			{selectedCourse && selectedStudent && (
				<Student selectedCourse={selectedCourse} student={student} />
			)}
		</main>
	)
}

export default Main
