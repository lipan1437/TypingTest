export const updateKeysPressed = (count) => {
  return {
    type: "UPDATE_KEYS_PRESSED",
    payload: count,
  };
};

export const updateAccuracy = (input) => {
  return {
    type: "UPDATE_ACCURACY",
    payload: input,
  };
};

export const updateTimer = (seconds) => {
  return {
    type: "UPDATE_TIMER",
    payload: seconds,
  };
};
