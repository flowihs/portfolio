import sun from "./img/sun.svg";
import moon from "./img/moon.svg";
import './style.css'
import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

export default function ButtonDarkMode () {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())
    const activeButton = 'dark-mode-btn dark-mode-btn--active'
    const normalButton = 'dark-mode-btn'

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
        }

        if (darkMode !== 'dark') {
            document.body.classList.remove('dark')
        }
    }, [darkMode])

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme)
            });
    })

    function toggleDarkMode () {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }


    return (
        <button className={darkMode === 'dark' ? activeButton : normalButton} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}