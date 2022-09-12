import React from "react";
import "./style.css"

export default function Input(props) {
    return (
        <label className="Modal-input-container">
            <input
                type={props.type}
                placeholder={props.msg}
                size={props.size}
                className="Modal-input"
            />
        </label>
    );
}