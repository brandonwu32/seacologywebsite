import "./table.css"

export default function Table(props) {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    <th className = "title">Projects</th>
                    <th className = "title">Status</th>
                    <th className = "title">Latest Update</th>
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