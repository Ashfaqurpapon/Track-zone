import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import useClock from "./hooks/useClock";
import ClockDisplay from "./components/shared/clock-display";
import { useState } from "react";
const LOCAL_CLOCK_INIT = {
  title: 'my clock',
  timezone: '',
  offset: 0,
  date: null,
};
function App() {

  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  const updateLocalClock=(date)=>{
    setLocalClock({...localClock, ...date});
  }






  return (
    <div className="App">
     <LocalClock clock={localClock} updateClock={updateLocalClock} />
      <ClockList />

    </div>
  );
}

export default App;
