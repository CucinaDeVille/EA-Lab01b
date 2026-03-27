import './AImage.css'

{/* AImage erhält props-Attribute, als ob es direkt von App.jsx kommen würde */}
export default function AImage(props) {
    return (
        <img className="nice-img" src={props.imageSrc} alt="article" />
    );
}