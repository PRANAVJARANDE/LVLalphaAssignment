import Home from './components/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='h-screen w-screen'>
      <Home/>
      <ToastContainer
        position="bottom-right" 
        autoClose={5000}  
        hideProgressBar={false} 
        closeButton={false} 
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App
