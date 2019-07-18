const dragReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'STEP':
      return payload.distance;
    default:
      return state;
  }
};

export default dragReducer;