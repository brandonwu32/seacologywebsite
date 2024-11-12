import "./table.css"

export default function Table(props) {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    <th className = "tile">Projects</th>
                    <th className = "tile">Status</th>
                    <th className = "tile">Latest Update</th>
                </tr>
            </thead>  
            <tbody>
                <tr>
                    <td>{props.project}</td>
                    <td>{props.status}</td>
                    <td>{props.update}</td>
                </tr>
            </tbody>
        </table>
    );
}