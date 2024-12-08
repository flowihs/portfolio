import ButtonGithub from '../components/buttonGitHub/ButtonGithud'
import { useParams } from 'react-router-dom'
import {projects} from './../helpers/projects-list'

export default function Project () {
    const {id} = useParams()
    const project = projects[id]

    return (
        <>
            <main className="section">
                <div className="container">
                    <div className="project-details">

                        <h1 className="title-1">{project.title}</h1>

                        <img src={project.imgBig} alt="" className="project-details__cover" />

                        <div className="project-details__desc">
                            <p>{project.skills}</p>
                        </div>

                        {project.gitHubLink && (
                            <ButtonGithub link={project.gitHubLink} />
                        )}
                        
                    </div>
                </div>
            </main>
        </>
    )
}