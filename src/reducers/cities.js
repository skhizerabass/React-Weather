import { ADD_CITY } from '../actions';

const initialState = {
    cities:[]
};

export default function location(state = initialState, action) {
	switch (action.type) {
		case ADD_CITY:
        return Object.assign({}, state, {

                cities: state.cities.push(action.payload.cities)
			});
		default:
			return state;
	}
}