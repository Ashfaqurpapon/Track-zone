import { useState } from "react";
import ClockForm from "../clock-form";


const defaultOffset = [
  -11.50,
  -11,
  -10.50,
  -10
  - 9.50,
  -9,
  -8.50,
  -8,
  0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,

];

const ClockActions = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);


  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? <button>Create</button> : <button>Delete</button>}
      {isEdit && (
        <ClockForm
          value={clock}
          handleClock={updateClock}
          title={!local}
          edit={true}

        />

      )}
    </div>
  );
};
export default ClockActions;
// export default ClockActions;
// const handleChange =(e)=>{
//   let {name,value}=e.target
//   if(name==='offset'){value =Number(value)*60}
//   updateClock({
// [name]:value
//   })
// }
/* <div>
<input type="text" name="title" value={clock.title} onChange={handleChange} />
<select name="timezone" value={clock.timezone}  onChange={handleChange}>
  <option value="GMT">GMT</option>
  <option value="EST">EST</option>
  <option value="PST">PST</option>
  <option value="EDT">EDT</option>
  <option value="UTC">UTC</option>
  <option value="MST">MST</option>
</select>
{(clock.timezone==='GMT'||clock.timezone==='UTC') &&(
  <select name="offset" value={clock.offset/60}  onChange={handleChange}>
      {defaultOffset.map(offset=>(
          <option key={offset} value={offset}>{offset}</option>
      ))}
  </select>
)}
</div> */