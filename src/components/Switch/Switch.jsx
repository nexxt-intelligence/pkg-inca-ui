import React, { useState, useEffect } from 'react';
import './Switch.css';

function Switch({ defaultState = false, onChange }) {
    const [checked, setChecked] = useState(defaultState);
    const handleChange = () => {
        if (onChange) {
            onChange();
        }
        setChecked((checked) => !checked);
    };

    useEffect(() => {
        setChecked(defaultState);
    }, [defaultState]);

    return (
        <div className="inca-switch--wrapper">
            <label className="inca-switch">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                <span className="inca-switch--slider"></span>
            </label>
        </div>
    );
}

export default Switch;
