const isLogged = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return action.data
    default:
      return false
  }
}

export default isLogged
