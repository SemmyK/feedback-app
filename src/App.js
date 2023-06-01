import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from '../src/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
//pages
import About from './pages/About'

export default function App() {
	const [feedback, setFeedback] = useState(FeedbackData)

	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete feedback?')) {
			setFeedback(prevFeedback => prevFeedback.filter(item => item.id !== id))
		}
	}

	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4()
		setFeedback(prevFeedback => [newFeedback, ...prevFeedback])
	}

	return (
		<Router>
			<Header />
			<main className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									deleteFeedback={deleteFeedback}
								/>
							</>
						}
					></Route>
					<Route path='/about' element={<About />} />
				</Routes>

				<AboutIconLink />
			</main>
		</Router>
	)
}
