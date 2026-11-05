import { useState } from "react";
import "./myStyles.css";
import footerStyles from "../footer/footer.module.css"

export default function ConditionalCss() {
    const [state, setState] = useState({
        isActive: true,
        success: true,
        darkMode: false,
        large: false,
        show: true,
        error: false,
        name: "",
        disabled: false,
        loading: false
    });
    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setState({ ...state, [name]: type === "checkbox" ? checked : value });
    };
    return (
        <div style={{ backgroundColor: state.darkMode ? "black" : "white" }}>
            {Object.keys(state).filter(k => k !== "name").map(k => (
                <label key={k} className="mx-2">
                    <input type="checkbox" name={k} checked={state[k]} onChange={handleChange} />
                    {k}
                </label>
            ))}
            <h1 style={{ color: state.isActive ? "green" : "red" }}>Status</h1>
            <h1 className={state.success ? "success" : "error"}>Message</h1>
            <h1 className={state.success ? footerStyles.success : footerStyles.error}>Message</h1>
            <div style={{ backgroundColor: state.darkMode ? "black" : "white" }}>
                Theme
            </div>
            <p style={{ fontSize: state.large ? "30px" : "16px" }}>React Text</p>
            <div style={{ display: state.show ? "block" : "none" }}>Content</div>
            <input style={{ border: state.error ? "2px solid red" : "2px solid green" }} />
            <input name="name" value={state.name} onChange={handleChange} placeholder="Enter name" />
            <button disabled={state.name === ""}>Submit</button>
            <div className={state.isActive ? "box active" : "box"}>Card</div>
            <img src="image.png" alt="Demo" style={{ opacity: state.disabled ? 0.5 : 1 }} />
            <button style={{ cursor: state.loading ? "not-allowed" : "pointer" }}>
                Save
            </button>
        </div>
    );
}


