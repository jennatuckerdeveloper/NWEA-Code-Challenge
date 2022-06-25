import TestResult from './TestResult'
const StudentTests = ({ tests }) => {
	return (
		<ul>
			{tests.map((test, i) => (
				<TestResult key={i} test={test} />
			))}
		</ul>
	)
}

export default StudentTests
