import { useState } from "react"
import { getOffset } from "../../../utils/timezone";

const ClockForm = ({ values, handleClock, title = true, edit = false }) => {

    const [formValues, setFormValues] = useState({ ...values });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({
    //         ...formValues, [name]: value
    //     });

    // };

    const handleChange = (e) => {
        let { name, value } = e.target
        if (name === 'offset') { value = Number(value) * 60 }
        setFormValues((prev)=>({
            ...prev,
            [name]:value,

        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClock(formValues);

    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>enter Title</label>
                <input type='text' id='title' name='title' value={formValues.title} onChange={handleChange} disabled={!title} />

            </div>
            <div>
                <label htmlFor='timezone'>enter timezone</label>
                <input type='text' name='timezone' id='timezone' value={formValues.timezone} onChange={handleChange} />

            </div>
            {(formValues.timezone === 'GMT' ||
                formValues.timezone === 'UTC') && (
                    <div>
                        <label htmlFor='offset'>enter offset</label>

                        <select id='offset'
                            name="offset"
                            value={formValues.offset / 60}
                            onChange={handleChange}
                        >
                            {getOffset().map(offset => (
                                <option key={offset} value={offset}>
                                    {offset}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
           
            <button>{edit ? 'Update' : 'Create'}</button>
        </form>
    );
}; export default ClockForm;