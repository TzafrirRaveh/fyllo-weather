import {ANSWER_STATUS} from "./actions";
import {createStore} from "redux";

const initState = {
	failStatus: 0,
	questionRemain: 5
}

const questionUpdate = (state=initState, action) => {
	switch (action.type) {
		case (ANSWER_STATUS):
			const newFailStatus = action.payload.currentAnswer ? state.failStatus : state.failStatus + 1;
			const newQuestionRemain = state.questionRemain -1;
			return {
				...state,
				failStatus: newFailStatus,
				questionRemain: newQuestionRemain
			}
			
		default:
			return state;
	}
}

const store = createStore(questionUpdate);

export default store;