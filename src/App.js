
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import Emailform from './Components/Emailform';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Register from './Components/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Register></Register>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Emailform></Emailform>
      }
    ]
  },
]);

// const auth = getAuth(app);
// const handlerform = (event) => {
//   event.preventDefault()
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   console.log(email, password);
// }
// const handleronchage = event => {
//   console.log(event.target.value);
// }
// const handleronBlur = event => {
//   console.log(event.target.value);
// }
function App() {
  return (
    <div className="">
      {/* <Emailform></Emailform> */}

      <RouterProvider router={router} />



      {/* <form onSubmit={handlerform}>
        <input onChange={handleronchage} type="email" name='email' id='email' placeholder='email' />
        <br />
        <input onBlur={handleronBlur} type="password" name='password' placeholder='password' />
        <br />
        <button>Submit</button>
      </form> */}
    </div>
  );
}

export default App;
