// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Register from "../components/Register"
import Schedule from "../components/Schedule"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// import React from 'react'
// import Header from '../components/Header/'
// import Footer from '../components/Footer'
// import MainCenter from '../components/MainCenter'
// import Speaker from '../components/Speaker'
// import Venue from '../components/Venue'
// import schedule from '../components/Schedule'
// import register from '../components/Register'

const App = () => {
  return (
    <div>
      {/* <Header/>  */}
      {/* <Footer/> */}
      {/* <MainCenter/> */}
      {/* <Speaker/> */}
      {/* <Venue/> */}
      <Schedule/>
      {/* <Register/> */}

    </div>
  )
}

export default App
