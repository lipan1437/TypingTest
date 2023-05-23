const initialState = {
  keyPressed: 0,
  nextKeys: "asdfjkl;",
  accuracy: 100,
  timer: 300,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_KEYS_PRESSED":
      return {
        ...state,
        keyPressed: action.payload,
      };

    case "UPDATE_ACCURACY":
      const input = action.payload;
      const nextKeys = state.nextKeys.slice(0, input.length);
      const incorrectCount = Array.from(input).reduce((count, char, index) => {
        return count + (char !== state.nextKeys.charAt(index) ? 1 : 0);
      }, 0);

      const accuracy = ((input.length - incorrectCount) / input.length) * 100;

      return {
        ...state,
        nextKeys,
        accuracy,
      };

    case "UPDATE_TIMER":
      return {
        ...state,
        timer: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
