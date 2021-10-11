import React,{useEffect} from "react"
import { authreducer, initialState } from "./reducer"

export const UserContext = React.createContext({
  state: initialState,
  
})

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authreducer, initialState)
  
  useEffect(()=>{
  if (localStorage.token) {
    console.log(localStorage.token);
    dispatch({type:"LOGIN_SUCCESS"});

  }
  
  // log user out from all tabs if they log out in one tab
  // window.addEventListener('storage', () => {
  //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
  // });
}, []);

  return (
    <UserContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </UserContext.Provider>
  )
}