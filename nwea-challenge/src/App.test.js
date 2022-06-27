import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import App from './App'
import { http } from './services/httpService'
import backupData from './backupData.json'

test('renders the courses', async () => {
	jest.spyOn(http, 'get').mockImplementation(() => backupData)
	render(<App />)
	await waitFor(() => {
		expect(screen.getByText('Mathematics')).toBeInTheDocument()
	})
	await waitFor(() => {
		expect(screen.getByText('Science')).toBeInTheDocument()
	})
})

test('renders the students in a clicked course', async () => {
	jest.spyOn(http, 'get').mockImplementation(() => backupData)
	render(<App />)

	await waitFor(() => {
		expect(screen.getByText('Mathematics')).toBeInTheDocument()
	})
	await waitFor(() => {
		expect(screen.getByText('Science')).toBeInTheDocument()
	})
	fireEvent.click(screen.getByText('Mathematics'))
	await waitFor(() => {
		const studentNames = [
			'Darth Vader',
			'Obi-Wan Kenobi',
			'Death Star Engineer'
		]
		for (let name of studentNames) {
			expect(screen.getByText(name)).toBeInTheDocument()
		}
	})
})

test('renders the test scores when a course then a student are clicked', async () => {
	jest.spyOn(http, 'get').mockImplementation(() => backupData)
	render(<App />)
	await waitFor(() => {
		expect(screen.getByText('Mathematics')).toBeInTheDocument()
	})
	fireEvent.click(screen.getByText('Mathematics'))
	await waitFor(() => {
		expect(screen.getByText('Darth Vader')).toBeInTheDocument()
	})
	fireEvent.click(screen.getByText('Darth Vader'))
	await waitFor(() => {
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
})
