import React from 'react'
import Header from './Header'
import '../../styles/layout.css'

const Layout = ({ children, logoutAction, isCreateFundraiser }) => {
	return (
		<> 
			<div className="layout">
				{/* <Header logoutAction={logoutAction}/> */}
				{children}
			</div>
		</>
	)
}

export default Layout
