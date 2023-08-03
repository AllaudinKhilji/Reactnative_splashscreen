import React, { useEffect } from "react";
import Home from "./components/Home";
import SplashScreen from "react-native-splash-screen";
import { Platform } from "react-native";
const App=()=>{
  useEffect(()=>{
   if(Platform.OS==='android')
   SplashScreen.hide();
  },[])
  return(
    <>
    <Home/>
    </>
  )
}
export default App;