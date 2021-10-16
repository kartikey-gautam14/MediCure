import React,{useEffect} from "react"
import { LOGIN_SUCCESS } from "./actiontypes"
import { authreducer, initialState,doctorauthreducer } from "./reducer";


export const UserContext = React.createContext({
  state: initialState,
  
})

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authreducer, initialState)
  
  useEffect(()=>{
  if (localStorage.token) {
    console.log(localStorage.token);
    dispatch({type:LOGIN_SUCCESS});

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

export const DoctorContext = React.createContext(
  {
    state : initialState
  }
  
)
export const DoctorProvider = ({children}) => {
  const [state,dispatch] = React.useReducer(doctorauthreducer, initialState);

  useEffect(()=>{
    if(localStorage.token){
      console.log(localStorage.token);
      dispatch({type : LOGIN_SUCCESS});
    }
  },[]);

  return(
    <DoctorContext.Provider value = {[state,dispatch]}>
      {children}
    </DoctorContext.Provider>
  )

}