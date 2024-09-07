const Header = () => {
	return (
		<>
			<header className='header'>
				<img className='wrapper_img header__profile' src='./public/profile.png' alt='' />
				<h1 className='header__name'>Laura Smith</h1>
				<h2 className='header__position'>Frontend Developer</h2>
				<small className='header__website'>laurasmith.website</small>
				<div className='header__social'>
					<a href='#0' className='btn'>
						<img className='' src='./public/Icons/email.png' alt='Email logo' />
						<span>Email</span>
					</a>
					<a href='#0' className='btn btn-blue'>
						<img src='./public/Icons/linkedin.png' alt='LinkedIn logo' />
						<span>LinkedIn</span>
					</a>
				</div>
			</header>
		</>
	);
};

export default Header;
