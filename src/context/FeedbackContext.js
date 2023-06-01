import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
//data
import FeedbackData from '../data/FeedbackData'
//create context
const FeedbackContext = createContext()

//create provider so that components can get acces to state and context
export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData)
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})
	//delete feedback
	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete feedback?')) {
			setFeedback(prevFeedback => prevFeedback.filter(item => item.id !== id))
		}
	}
	//add feedback
	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4()
		setFeedback(prevFeedback => [newFeedback, ...prevFeedback])
	}

	//set item to be updated
	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	//update feedback item
	const updateFeedback = (id, updatedItem) => {
		return setFeedback(
			feedback.map(item =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
