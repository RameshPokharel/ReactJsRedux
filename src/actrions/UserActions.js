export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}
export const decrement = () => {
  return { type: 'DECREMENT' }
}
export const SignIn = (data) => {
  return { type: 'SIGN_IN', data: data }
}
export const IncrementFromThunk = () => {
  return { type: 'IncrementFromThunk' }
}
