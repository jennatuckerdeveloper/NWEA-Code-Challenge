const Nav = ({
	selectedCourse,
	selectedStudent,
	onClassesClick,
	onStudentsClick
}) => {
	return (
		<nav
			className='navbar navbar-expand-lg bg-light p-2'
			aria-label='breadcrumb'>
			<ol className='breadcrumb mt-3'>
				<li className='breadcrumb-item text-primary' onClick={onClassesClick}>
					Classes
				</li>
				{selectedCourse && (
					<li
						className='breadcrumb-item text-primary'
						onClick={onStudentsClick}>
						Students
					</li>
				)}
				{selectedCourse && selectedStudent && (
					<li className='breadcrumb-item'>Tests</li>
				)}
			</ol>
		</nav>
	)
}

export default Nav
