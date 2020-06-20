//WALLET REDUCER
const authReducer = (state = false, action) => {
    switch(action.type){
      case "AUTH":
        return true;
      case "UN_AUTH":
        return false;
      default:
        return state;
    }
  }

//WALLET ACTIONS
export const auth = () => {
    return {
      type : 'AUTH'
    }
  }
  
export const unauth = () => {
    return {
      type : 'UN_AUTH' 
    }
  }

export default authReducer;