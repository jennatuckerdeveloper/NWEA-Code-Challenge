import TestResult from './TestResult'
const StudentTests = ({ tests }) => {
	return (
		<ul className='list-group'>
			{tests.map((test, i) => (
				<TestResult key={i} test={test} />
			))}
		</ul>
	)
}

export default StudentTests
