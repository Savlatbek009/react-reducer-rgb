/* eslint-disable no-duplicate-case */
const reducer = (state, action) => {
  const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
  const step = 50;
  switch (action.type) {
    case "INCREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r + step),
      };
    case "DECREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r - step),
      };

    case "INCREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g + step),
      };
    case "DECREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g - step),
      };
    case "INCREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b + step),
      };
    case "DECREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b - step),
      };
    default:
      return state;
  }
};

export default reducer;
