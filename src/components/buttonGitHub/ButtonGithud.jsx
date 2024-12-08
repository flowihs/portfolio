import githubIcon from './gitHub-black.svg'
import '../../styles/main.css'

export default function ButtonGithub ({ link }) {

    return (
        <>
            <a href={link} target="blank"rel="noreferrer" className="btn-outline">
                <img src={githubIcon} alt="" />
                GitHub repo
            </a>
        </>
    )
}