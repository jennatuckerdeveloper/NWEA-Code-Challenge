const TestResult = ({ test }) => {
	return (
		<li className='list-group-item'>
			{test.testName} {test.testScore}
		</li>
	)
}

export default TestResult
