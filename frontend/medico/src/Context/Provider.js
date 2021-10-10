import React from "react"
import { authreducer, initialState } from "./reducer"

export const UserContext = React.createContext({
  state: initialState,
  
})

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(authreducer, initialState)

  return (
    <UserContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </UserContext.Provider>
  )
}