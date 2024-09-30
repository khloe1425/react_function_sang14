import { createRoot } from 'react-dom/client'
// C2: import từ node module
// import bootstrap from 'bootstrap'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import App from './App'


createRoot(document.getElementById('root')).render(
  //jsx : đối tượng thẻ UI của reactjs
  //Chỉ nên có 1 component
  <App/>
)
