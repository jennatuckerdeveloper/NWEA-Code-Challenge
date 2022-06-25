import AllCourses from './Courses/AllCourses'
import CourseStudents from './Students/CourseStudents'
import Student from './Students/Student'

// Main controls the conditional rendering of components with derived values computed from state.
const Main = ({
	courses,
	selectedCourse,
	onCourseSelect,
	selectedStudent,
	onStudentSelect
}) => {
	// Derived state by filtering courses when user selects a course.
	const getStudents = () => {
		const chosenCourse = courses.filter(
			(course) => course.className === selectedCourse
		)
		return chosenCourse[0].students
	}

	// Specific course's students.
	const students = selectedCourse ? getStudents() : null

	// Derived state by filtering students when user selects students.
	const getStudent = (students) => {
		const student = students.filter(
			(student) => student.studentName === selectedStudent
		)
		return student[0]
	}

	// Specific student's info.
	const student =
		selectedCourse && selectedStudent ? getStudent(students) : null

	return (
		// Conditionally render 1 of 3 components.
		<main>
			{!selectedCourse && (
				<AllCourses courses={courses} onCourseSelect={onCourseSelect} />
			)}
			{selectedCourse && !selectedStudent && (
				<CourseStudents students={students} onStudentSelect={onStudentSelect} />
			)}
			{selectedCourse && selectedStudent && <Student student={student} />}
		</main>
	)
}

export default Main
