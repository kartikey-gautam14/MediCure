
import './App.css';
import { UserProvider } from "./Context/Provider";
import Header from './Components/Header'

function App() {
  return (
    <UserProvider>
      <Header />
      
    </UserProvider>
  );
}

export default App;
