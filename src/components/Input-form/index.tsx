import "./style.css"

export default function Input(props: { type: string | (string & {}) | undefined; msg: string | undefined; size: number | undefined; }) {
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