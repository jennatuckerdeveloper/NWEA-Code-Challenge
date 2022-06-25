const TestResult = ({ test }) => {
	return (
		<li>
			{test.testName} {test.testScore}
		</li>
	)
}

export default TestResult
