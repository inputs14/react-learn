import {
  INCREMENT,
  DECREMENT,
  DELETE,
  RESET,
  GET_COUNTERS
} from "../actions/actions";

// Reducer helps to return the state from the store as Redux dont know a thing
const initialState = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
    { id: 4, value: 3 }
  ]
};
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      var counters = [...state.counters];
      var index = counters.indexOf(action.payload.counterId);
      counters[index] = { ...action.payload.counterId };
      counters[index].value++;
      return {
        ...state,
        counters
      };

    case DECREMENT:
      var counters = [...state.counters];
      var index = counters.indexOf(action.payload.counterId);
      counters[index] = { ...action.payload.counterId };
      if (counters[index].value !== 0) counters[index].value--;
      return {
        ...state,
        counters
      };

    case DELETE:
      var counters = state.counters.filter(
        c => c.id !== action.payload.counterId.id
      );
      return {
        ...state,
        counters
      };

    case RESET:
      var counters = state.counters.map(c => {
        c.value = 0;
        return c;
      });
      return {
        ...state,
        counters
      };

    case GET_COUNTERS:
      return state;

    default:
      return state;
  }
}
