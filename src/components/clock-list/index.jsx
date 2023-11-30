import ClockListItem from "./clock-list-item";

const ClockList =({clocks,updateClock})=>{
    ;
    return(
     <div>
      <h3>Other Clocks</h3>
      <hr/>
      {clocks.length ===0 ?(
        <p>There is no clock,please create one.</p>
      ):(
        <div>
            {clocks.map((clock) =>(
                <ClockListItem clock={clock} key={clock.id} updateClock={updateClock}/>
            ))}
        </div>
      )}
     </div>
    );
};
export default ClockList;