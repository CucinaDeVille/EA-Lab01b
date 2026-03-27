import './ANum.css'

{/* ANum erhält props-Attribute, als ob es direkt von App.jsx kommen würde */}
export default function ANum(props) {
    return (
        <div className="nice-num">
            {props.mynum}
        </div>
    );
}