const dragReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'STEP':
      return payload.distance;
    // case 'MOUSEDOWN':
    //   return 0;
    default:
      return state;
  }
};

export default dragReducer;