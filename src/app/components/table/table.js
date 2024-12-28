import "./table.css";

export default function Table(props) {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                    <th className="tile">Projects</th>
                    <th className="tile">Status</th>
                    <th className="tile">Latest Update</th>
                </tr>
            </thead>
            <tbody>
                {props.projects.map((project, index) => (
                    <tr key={index}>
                        <td>{project.project_name}</td>
                        <td>{project.status}</td>
                        <td>{project.time.toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
