import ReactDOM from 'react-dom/client';
import App from "./app"
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // fragments
  <>
   <App/>
   {/* component based */}
  </>
);