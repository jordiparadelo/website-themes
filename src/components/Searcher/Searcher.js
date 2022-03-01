import React from 'react';
// Styles
import "./Searcher.scss";
// Data
import { formConfig } from "./formConfig";

const Searcher = () => {
    console.log(formConfig)
    return (
        <form className="searcher">
            {formConfig.inputs.map(({ label, type, placeholder, required }) => (
                <label
                    key={label}
                    className="input-group"
                    data-input={label.split(" ").join("-").toLowerCase()}
                >
                    {label}
                    <input
                        type={type}
                        label={label}
                        placeholder={placeholder}
                        required={required}
                    />
                </label>
            ))}
            <div className="input-group" data-input="submit">
                <button type="submit">Search</button>
            </div>
        </form>
    );
};

export default Searcher;