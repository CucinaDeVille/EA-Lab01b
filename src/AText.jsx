import './AText.css'

{/* AText erhält props-Attribute, als ob es direkt von App.jsx kommen würde */}
export default function AText(props) {
    return (
        <div className="nice-txt">
            {props.mytext}
        </div>
    );
}