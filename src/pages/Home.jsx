import Header from "../components/header/Header";


export default function Home () {
    

    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, SASS, NPM, BootStrap, TailwindCSS, Material UI</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>Java, Spring</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )

}