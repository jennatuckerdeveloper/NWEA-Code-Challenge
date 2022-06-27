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

	// Simplest error state.
	const [displayError, setDisplayError] = useState(null)

	// Fetch the courses.
	useEffect(() => {
		// Asynchronous fetch and load called by useEffect.
		const fetchCourses = async () => {
			try {
				const courses = await getCourses()
				setCourses(courses)
				// Very simple error state for the data fetch.
			} catch (ex) {
				setDisplayError('The backend data could not be fetched.')
			}
		}

		fetchCourses()

		// No return function, because no clean up from data fetch required.
		/* 
			This effect does not use state or prop values in its logic. 
			Empty dependency array to prevent infinite loop.

			No dependency array or adding courses or fetchCourses to the dependency array 
			creates a loop where useEffect and render keep calling each other. 

			Basically, the component updates when state gets set, 
			and useEffect will be called and set state.  

			The empty dependency array means:   
			Run an effect only once on mount.
			If a clean up function is returned, clean it up only once on unmount. 

			useEffect combines componentDidMount, componentDidUpdate, componentWillUnmount.
		*/
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
	console.log('render?', courses)
	return (
		<div className='App '>
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
			{displayError && <div className='alert alert-danger'>{displayError}</div>}
		</div>
	)
}

export default App
