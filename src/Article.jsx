import './Article.css'
import AImage from './AImage'
import ADesc from './ADesc'

export default function Article(props) {
    return (
        <table className="nice-atl">
            <tbody>
            <tr>
                <td style={{width:"100px"}}>
                    {/* Erhaltene props-Parameter unberührt weiterreichen */}
                    <AImage {...props} />
                </td>

                <td>
                    {/* Erhaltene props-Parameter unberührt weiterreichen */}
                    <ADesc {...props} />
                </td>
            </tr>
            </tbody>
        </table>
    );
}