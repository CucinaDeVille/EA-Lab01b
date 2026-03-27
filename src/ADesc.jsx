import './ADesc.css'
import AText from './AText.jsx'
import ANum from './ANum.jsx'

export default function ADesc(props) {
    return (
        <table className="nice-tbl">
            <tbody>
            <tr>
                <td>
                    {/* Erhaltene props-Parameter unberührt weiterreichen */}
                    <AText {...props} />
                </td>

                <td style={{width: "100px"}}>
                    {/* Erhaltene props-Parameter unberührt weiterreichen */}
                    <ANum {...props} />
                </td>
            </tr>
            </tbody>
        </table>
    );
}