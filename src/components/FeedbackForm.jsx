import React, { useState } from 'react'
//styled component
import Card from './shared/Card'
import Button from './shared/Button'
//components
import RatingSelect from './RatingSelect'

function FeedbackForm({ handleAdd }) {
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const handleTextChange = e => {
		const inputText = e.target.value

		if (text == '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must be at least 10 characters.')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}

		setText(inputText)
	}
	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			}
			handleAdd(newFeedback)
			setText('')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>

				<RatingSelect select={setRating} selected={rating} />
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a review'
						value={text}
						onChange={handleTextChange}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm