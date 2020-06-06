//WALLET REDUCER
const walletReducer = (state = [], action) => {
    switch(action.type){
      case "ADD_TICKET":
        state.push(action.payload);
        return state;
      case "CLEAR_TICKETS":
        state = [];
        return state;
      default:
        return state;
    }
  }

//WALLET ACTIONS
export const addTicket = (NAME) => {
    return {
      type : 'ADD_TICKET',
      payload: NAME
    }
  }
  
export const clearTickets = () => {
    return {
      type : 'CLEAR_TICKETS' 
    }
  }

export default walletReducer;