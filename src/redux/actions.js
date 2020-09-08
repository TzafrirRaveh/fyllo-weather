export const ANSWER_STATUS = 'ANSWER_STATUS';

export function answerStatus(currentAnswer) {
	return {
		type: ANSWER_STATUS,
		payload: {
			currentAnswer
		}
	}
}