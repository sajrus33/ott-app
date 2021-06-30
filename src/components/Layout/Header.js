import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Buttons/Button'
// import Avatar from '../Avatar'
import '../../styles/header.css'

const Header = ({ isLoggedIn, logoutAction }) => {
	return (
		<header className="header">
			<nav className="header__nav">
				{isLoggedIn ? (
					<>
						<Link className="header__logo" to="/">  
							<img className="header__logo--img" src="/logo-cutted.png" alt="logo"/>
						</Link>
						{/* <Avatar username={username} href="/profile" customStyle={{ marginRight: 8 }} /> */}
						<Link className="header__link" to="/create-fundraiser">  
							<Button>
              Start Fundraiser
							</Button>
						</Link>
						<Button onClick={logoutAction}>
            Logout
						</Button>
					</>
				) : ( 
					<>
						<Link className="header__logo" to="/">  
							<img className="header__logo--img" src="/logo-cutted.png" alt="logo"/>
						</Link>
						<Link className="header__link" to="/login">  
							<Button>
              Login
							</Button>
						</Link>
					</>
				)}
			</nav>
		</header>
	)
}

export default Header
