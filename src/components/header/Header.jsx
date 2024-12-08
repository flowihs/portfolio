import './style.css';
import useTypingEffect from '../../utils/useTypingEffect'; // Импортируйте ваш хук

export default function Header() {
    const typedText = useTypingEffect("Angel..", 400, 200, 1000); // 400 мс между символами, 200 мс для стирания, 1000 мс пауза

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em className="cursor">{typedText}</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="#!" className="btn">Download CV</a>
            </div>
        </header>
    );
}