export const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
  };

 export const authreducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
       

        
          case "USER_LOADED":
            return {
              ...state,
              isAuthenticated: true,
              loading: false,
              user: payload
            };
          case "REGISTER_SUCCESS":
          case "LOGIN_SUCCESS":
            return {
              ...state,
              ...payload,
              isAuthenticated: true,
              loading: false
            };
          case "ACCOUNT_DELETED":
          case "AUTH_ERROR":
          case "LOGOUT":
            return {
              ...state,
              token: null,
              isAuthenticated: false,
              loading: false,
              user: null
            };
          default:
            return state;
        }
    
  };
  export default authreducer;