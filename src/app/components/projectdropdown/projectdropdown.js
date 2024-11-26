'use server'

import './projectdropdown.css'
import { fetchProjects } from '../../lib/data';

export default async function ProjectDropdown() {
    
    const openFirstPopup = () => {
        setIsFirstPopupOpen(!isFirstPopupOpen);
    };

    const projects = await fetchProjects();

    const handleSelectProject = (selectedProject) => {
        if (selectedProject == "Other") {
        setIsOtherPopupOpen(true);
        }else{
        setProject(selectedProject);
        }
        setIsFirstPopupOpen(false);
    };
    return (
        <div className="formDropdown-container">
                <input type="text" value={project} onClick={openFirstPopup} readOnly placeholder="Select a project" className = "page"/>
                {isFirstPopupOpen && (
                <div className="formDropdown-list">
                    {projects.map((proj, index) => (

                    <div key={index} className="formDropdown-item" onClick={() => handleSelectProject(proj)}>
                        {proj}
                    </div>
                    ))}
                </div>
                )}
        </div>
    )
    
}