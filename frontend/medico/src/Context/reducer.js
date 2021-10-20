
  import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    USER_LOADED,
    ACCOUNT_DELETED,
    AUTH_ERROR,
    LOGOUT

  } from './actiontypes';
  export const initialState = {
    isAuthenticated: localStorage.getItem('token'),
   
    token: null,
    loading : true,
    
  };

 export const authreducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
       

        
          case USER_LOADED:
            return {
              ...state,
              isAuthenticated: true,
              loading: false,
             
            };
          case REGISTER_SUCCESS:
          case LOGIN_SUCCESS:
            return {
              ...state,
              ...payload,
              isAuthenticated: true,
              loading: false,
              token : localStorage.getItem('token')
            };
          
         
          case ACCOUNT_DELETED:
          case AUTH_ERROR:
          case LOGOUT:
            return {
              ...state,
              token: null,
              isAuthenticated: false,
              loading: false,
            
            };
          default:
            return state;
        }
    
  };
  export const doctorauthreducer = (state = initialState,action) => {
    const {type,payload} = action;

    switch(type) {
      case USER_LOADED :
        return{
          ...state,
          isAuthenticated:true,
          loading :false,
         token : localStorage.getItem('token')
          
         

        }
        case REGISTER_SUCCESS :
        case LOGIN_SUCCESS :
          return{
            ...state,
            isAuthenticated:true,
            loading: false,
            token : localStorage.getItem('token'),

          }
        case ACCOUNT_DELETED : 
        case AUTH_ERROR:
        case LOGOUT:
          return{
            ...state,
            token:null,
            isAuthenticated:true,
            loading :true,
            
          }
    }

  }
  