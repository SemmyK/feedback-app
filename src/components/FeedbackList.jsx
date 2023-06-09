import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
//context
import FeedbackContext from '../context/FeedbackContext'
//components
import FeedbackItem from './FeedbackItem'

function FeedbackList() {
	const { feedback } = useContext(FeedbackContext)

	if (!feedback || feedback.length === 0) {
		return <article>No feedback yet.</article>
	} else {
		return (
			<article className='feedback-list'>
				<AnimatePresence>
					{feedback.map(item => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<FeedbackItem key={item.id} item={item} />
						</motion.div>
					))}
				</AnimatePresence>
			</article>
		)

		//example without framer-motion
		// return (
		// 	<article className='feedback-list'>
		// 		{feedback.map(item => (
		// 			<FeedbackItem
		// 				key={item.id}
		// 				item={item}
		// 				handleDelete={deleteFeedback}
		// 			/>
		// 		))}
		// 	</article>
		// )
	}
}

export default FeedbackList
