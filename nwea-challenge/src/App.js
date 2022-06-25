import { useState, useEffect } from 'react'
import { getCourses } from './services/courseService'
import AllCourses from './components/AllCourses'
import CourseStudents from './components/CourseStudents'
import Student from './components/Student'
import Nav from './components/Nav'

function App() {
	const [courses, setCourses] = useState([])
	const [selectedCourse, setSelectedCourse] = useState(null)
	const [selectedStudent, setSelectedStudent] = useState(null)

	useEffect(() => {
		try {
			fetchCourses()
		} catch (ex) {}
	}, [])
	const fetchCourses = async () => {
		const courses = await getCourses()
		setCourses(courses)
	}
	const onCourseSelect = (courseName) => {
		setSelectedCourse(courseName)
	}

	const onStudentSelect = (studentName) => {
		setSelectedStudent(studentName)
	}

	const getStudents = () => {
		const chosenCourse = courses.filter(
			(course) => course.className === selectedCourse
		)
		if (!chosenCourse.length) return []
		return chosenCourse[0].students
	}

	const students = getStudents()

	const getStudentTests = () => {
		const chosenCourse = courses.filter(
			(course) => course.className === selectedCourse
		)
		if (!chosenCourse.length) return null
		const students = chosenCourse[0].students
		const student = students.filter(
			(student) => student.studentName === selectedStudent
		)
		if (!student.length) return null
		return student[0]
	}

	const studentTests = getStudentTests()

	return (
		<main className='App'>
			<Nav
				selectedCourse={selectedCourse}
				selectedStudent={selectedStudent}
				onClassesClick={() => setSelectedCourse(null)}
				onStudentsClick={() => setSelectedStudent(null)}
			/>
			{!selectedCourse && (
				<AllCourses courses={courses} onCourseSelect={onCourseSelect} />
			)}
			{selectedCourse && !selectedStudent && (
				<CourseStudents students={students} onStudentSelect={onStudentSelect} />
			)}
			{selectedStudent && <Student student={studentTests} />}
		</main>
	)
}

export default App
