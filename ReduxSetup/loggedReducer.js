//WALLET REDUCER
const loggedReducer = (state = false, action) => {
    switch(action.type){
      case "LOG_IN":
        return true;
      case "LOG_OUT":
        return false;
      default:
        return state;
    }
  }

//WALLET ACTIONS
export const logIn = () => {
    return {
      type : 'LOG_IN'
    }
  }
  
export const logOut = () => {
    return {
      type : 'LOG_OUT' 
    }
  }

export default loggedReducer;