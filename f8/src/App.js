import logo from './logo.svg';
import './App.css';
import MountedAndUnmounted from './useEffect/mountedAndUnmounted';
import CountDown from './useEffect/setTimeOut';
import { useState } from 'react';
import ChangeAvatar from './useEffect/cleanUpUse';
import FakeChatApp from './useEffect/fakeChatApp';
import ProductsCart from './useMemo/useMemo';

function App() {
  const [show,setShow] = useState(false)


  return (
    <div>
      <div style={{padding:20}}><button onClick={()=>setShow(!show)}>Toggle</button></div>

      {/* -------------------------------------------------------------------------- */
      /*                            Component of useEffect                           */
      /* -------------------------------------------------------------------------- */}
      {/* {show && <FakeChatApp />} */}
      {/* {show && <ChangeAvatar />} */}
      {/* {show && <CountDown />} */}
      {/* {show && <MountedAndUnmounted/>} */}




      {/* -------------------------------------------------------------------------- */
      /*                            Component of useMemo                              */
      /* -------------------------------------------------------------------------- */}
      {show && <ProductsCart />}
      
    </div>
  );
}

export default App;
