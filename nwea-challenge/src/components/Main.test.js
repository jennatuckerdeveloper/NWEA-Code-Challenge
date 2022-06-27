import { render, screen } from '@testing-library/react'
import Main from './Main'
import backupData from '../backupData.json'

test('renders the courses if no course or student selected', () => {
	const props = {
		courses: backupData.data,
		selectedCourse: null,
		onCourseSelect: null,
		selectedStudent: null,
		onStudentSelect: null
	}
	render(<Main {...props} />)
	const mathematicsCourse = screen.getByText(/mathematics/i)
	expect(mathematicsCourse).toBeInTheDocument()
	const scienceCourse = screen.getByText(/science/i)
	expect(scienceCourse).toBeInTheDocument()
})

test('renders the students if course selected', () => {
	const props = {
		courses: backupData.data,
		selectedCourse: 'Mathematics',
		onCourseSelect: null,
		selectedStudent: null,
		onStudentSelect: null
	}
	render(<Main {...props} />)
	const studentNames = ['Darth Vader', 'Obi-Wan Kenobi', 'Death Star Engineer']
	for (let name of studentNames) {
		const queryFind = screen.getByText(name)
		expect(queryFind).toBeInTheDocument()
	}
})

test('renders the test results if student selected', () => {
	const props = {
		courses: backupData.data,
		selectedCourse: 'Mathematics',
		onCourseSelect: null,
		selectedStudent: 'Darth Vader',
		onStudentSelect: null
	}
	render(<Main {...props} />)
	const testResults = [
		{
			testName: 'Week 1 pre-exam',
			testScore: 93
		},
		{
			testName: 'Week 2 exam',
			testScore: 80
		},
		{
			testName: 'Week 3 exam',
			testScore: 70
		},
		{
			testName: 'Week 4 exam',
			testScore: 90
		}
	]
	for (let testObject of testResults) {
		for (let value of Object.values(testObject)) {
			const queryFind = screen.getByText(value)
			expect(queryFind).toBeInTheDocument()
		}
	}
})

