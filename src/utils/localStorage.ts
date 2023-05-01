const KEY = 'redux';

export const saveStateToLocal = (state:any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    console.log('Error:', e);
  }
};

export const loadStateFromLocal = () => {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
