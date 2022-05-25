import { INCREMENT, DECREMENT } from "../action/action-types"


const innitialState = {
	count: 0
}

const countReducer = (state = innitialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			}

		default:
			return state
	}

}

export default countReducer;