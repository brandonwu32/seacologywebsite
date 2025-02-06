import './infopopup.css';
import Table from '../../table/table';
import Button from '../../button/button';
import WhitePageBubble from '../../whitepagebubbles/popupbubble';
import { useEffect, useState } from 'react';
import { fetchProjectsWithName } from '@/app/lib/data';

export default function WhitePagePopUp(props) {
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        const members = async () => {
            try {
            const result = await fetchProjectsWithName(props.name);
            setProjects(result);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
    };

    members()
    }, []);
    return props.trigger ? (
        <div className="ippopupOverlay">
            <div className="ippopup">
                <div className='iprectangle'>
                    <p className='ipname'>{props.name}</p>
                    <hr className="ipyellowline" />
                    <div className="ipbubs">
                        <WhitePageBubble
                            image={props.image}
                            alt="https://media.licdn.com/dms/image/v2/C560BAQFGLEe_yK2JRw/company-logo_200_200/company-logo_200_200/0/1630601534327/seacology_logo?e=1746662400&v=beta&t=pG41ZFN10ckgCxb3Cu5RQiVv0Rbo9SGrcVF1rTf5PFo"
                            className="picturr"
                        />
                    </div>
                    {/* Pass the projects array to the Table component */}
                    <Table projects={projects} />
                </div>
                <div className="ipbuttonz">
                    <Button color="blue" size="small" text="Close" onClick={props.close}/>
                </div>
            </div>
        </div>
    ) : null;
}
