export default  function reducer(state, action) {
    switch (action.type) {
      case "numAdd2":
        return { ...state, num: state.num + 2 };
      case "multi7":
        return { ...state, num: state.num * 7 };
      case "div25":
        return { ...state, num: state.num / 25 };
      case "numParseInt":
        return { ...state, num: parseInt(state.num)};
      case "addN":
        return { ...state, num: state.num + action.payload};
      case "login":
        return { ...state, user: { name: action.payload } };
      default:
        return state;
    }
  }