import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
//data
import FeedbackData from '../data/FeedbackData'
//create context
const FeedbackContext = createContext()

//create provider so that components can get acces to state and context
export const FeedbackProvider = ({ children }) => {
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
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback,
				addFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
