
import './App.css';
import { UserProvider } from "./Context/Provider";
import Header from './Components/Header'
import Register from './Components/Register'

function App() {
  return (
    <UserProvider>
      <Header />
      <Register/>
      
    </UserProvider>
  );
}

export default App;
