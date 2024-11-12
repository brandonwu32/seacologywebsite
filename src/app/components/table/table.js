import "./table.css";

export default function Table({ projects }) {
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
                {projects.map((project, index) => (
                    <tr key={index}>
                        <td>{project.project}</td>
                        <td>{project.status}</td>
                        <td>{project.latestupdate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
