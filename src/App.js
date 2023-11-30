import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import useClock from "./hooks/useClock";
import ClockDisplay from "./components/shared/clock-display";
import { useState } from "react";
import { generate } from "shortid";
import shortid from "shortid";
const LOCAL_CLOCK_INIT = {
  title: 'my clock',
  timezone: '',
  offset: 0,
  date: null,
};
function App() {

  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks,setClocks]=useState([]);
  const updateLocalClock=(date)=>{
    setLocalClock({...localClock, ...date});
  }
  const createClock=(clock)=>{
    clock.id=generate();
   setClocks([...clocks,clock]);
  };

 const updateClock=(updatedClock)=>{
    
    console.log(updatedClock);
    clocks.map((clock) =>{
      console.log(clock.id);
      console.log(updatedClock.id);
      

      if(clock.id === updatedClock.id){
        console.log(34);
         return updatedClock;
      }
      return clock;
    })
 }






  return (
    <div className="App">
     <LocalClock clock={localClock} updateClock={updateLocalClock}
     createClock ={createClock}/>
      <ClockList clocks={clocks} 
      updateClock={updateClock}/>

    </div>
  );
}

export default App;
