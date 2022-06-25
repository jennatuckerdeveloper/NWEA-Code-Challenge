import { useState, useEffect } from 'react'
import { getCourses } from './services/courseService'
import Main from './components/Main'
import Nav from './components/Nav'

// App controls highest level of state derivation.
function App() {
	// The app has 3 state values.

	// The courses get fetched when the app loads.
	const [courses, setCourses] = useState([])

	// The user can select a specific course and a specific student.
	const [selectedCourse, setSelectedCourse] = useState(null)
	const [selectedStudent, setSelectedStudent] = useState(null)

	// Fetch the courses.
	useEffect(() => {
		try {
			fetchCourses()
		} catch (ex) {}
		// Empty dependency array to prevent infinite loop.
	}, [])

	// Asynchronous fetch and load called by useEffect.
	const fetchCourses = async () => {
		const courses = await getCourses()
		setCourses(courses)
	}

	// When user selects course.
	const onCourseSelect = (courseName) => {
		setSelectedCourse(courseName)
	}

	// When user selects student.
	const onStudentSelect = (studentName) => {
		setSelectedStudent(studentName)
	}

	// Clear selected student.
	const clearSelectedStudent = () => {
		setSelectedStudent(null)
	}

	// Clear selected course.  Needs to also clear student.
	const clearSelectedCourse = () => {
		setSelectedCourse(null)
		clearSelectedStudent()
	}

	return (
    <div className='App'>
			<Nav
				selectedCourse={selectedCourse}
				selectedStudent={selectedStudent}
				onClassesClick={clearSelectedCourse}
				onStudentsClick={clearSelectedStudent}
			/>
			<Main
				courses={courses}
				selectedCourse={selectedCourse}
				onCourseSelect={onCourseSelect}
				selectedStudent={selectedStudent}
				onStudentSelect={onStudentSelect}
			/>
		</div>
	)
}

export default App
