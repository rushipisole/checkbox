import React, { useState } from 'react'
import "./Check.css";



const Check = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [isAdd, setIsAdd] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const addNewRow = () => {
        setIsAdd([...isAdd, { id: isAdd.length + 1 }])
    }

    function selectOption() {
        return (
            <div>
                <select onChange={handleOptionChange}>
                    <option value="">Select an option...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        );
    }


    return (
        <main>
            <div className="top">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={isChecked} onChange={handleCheckboxChange} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Default checkbox
                </label>
            </div>
            {isChecked && <div className='background'>
                {console.log(isAdd)}
                <div className='firstDiv'>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={addNewRow}>Add</button>
                    </div>

                    <div className='heading'>
                        <table className='table2'>
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Table Name</th>
                                </tr>
                            </thead>

                            <tbody>
                                {isAdd?.map((data, index) => {
                                    return <React.Fragment key={index}>
                                        <tr className='number-option'>
                                            <td style={{ padding: "10px" }}>{index + 1}</td>
                                            <td className='dropdown-cell' style={{ padding: "10px" }}>
                                                {selectOption()}
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>}
        </main>

    )
}
export default Check;
