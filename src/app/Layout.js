import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />
			<main>
				<div class="h-full max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					{ props.children }
				</div>
			</main>
		</div>

	)
}
