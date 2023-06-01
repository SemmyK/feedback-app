import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
//components
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, deleteFeedback }) {
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
							<FeedbackItem
								key={item.id}
								item={item}
								handleDelete={deleteFeedback}
							/>
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

//set up default prop type
FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			// id: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
}

export default FeedbackList
