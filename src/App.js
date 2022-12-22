import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext, UserProvider } from '../src/context/GlobalState';
import { useContext } from 'react';

function App() {

  return (
    <div className="App">
      {/* <NavBar /> */}
      <UserProvider>

        <Routes>
          <Route path='/' element={<HomePage />} />


          <Route path='create-user' element={< UserForm />} />

          <Route path='update-user-form' element={<UserForm />} />


        </Routes>
      </UserProvider>

    </div>
  );
}

export default App;
