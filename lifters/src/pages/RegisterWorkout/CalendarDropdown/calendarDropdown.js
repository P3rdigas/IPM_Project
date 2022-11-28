import React, {useState} from "react";

function CalendarDropdown({optionsR, selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = optionsR;
    return (
        <div className='calendar-dropdown'>
            <div className='calendar-dropdown-btn' onClick={e => setIsActive(!isActive)}>
                {selected}
                <span className='fas fa-caret-down'></span>
            </div>
            {isActive && (
                <div className='calendar-dropdown-content'>
                    {options.map(option => (
                        <div onClick= {(e) => {
                            setSelected(option);
                            setIsActive(false)} }
                        className='calendar-dropdown-item'>{option}</div>
                    ))}
                    
                    
                </div>    
            )}
        </div>
    )
}

export default CalendarDropdown