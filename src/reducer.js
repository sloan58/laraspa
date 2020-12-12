export const initState = {
  isAuthenticated: false,
  user: null,
  loading: true,
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      }
    case 'LOGGED_OUT':
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      }
    default:
      return state
  }
}
