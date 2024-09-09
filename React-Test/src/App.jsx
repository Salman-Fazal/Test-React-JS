// import ComA from "./components/ComA";
import FirstCounter from "./components/FirstCounter";
import ContextProvider from "./context/ContextProvider"

function App() {
  return (
    <>
   
     <ContextProvider>
      <FirstCounter/>
     </ContextProvider>
    </>
  )
}
 
export default App;