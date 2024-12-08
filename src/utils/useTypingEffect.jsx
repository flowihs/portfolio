import { useEffect, useState } from 'react';

export default function useTypingEffect (text, typingSpeed = 150, deletingSpeed = 75, pauseDuration = 1000) {
    // Состояния
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            // Если мы печатаем
            if (!isDeleting) {
                if (index < text.length) {
                    setDisplayedText(text.substring(0, index + 1))
                    setIndex(index + 1)
                }

                if (index === text.length) {
                    setTimeout(() => setIsDeleting(true), pauseDuration)
                }
            }
            
            // Если мы удаляем
            if (isDeleting) {
                if (index > 0) {
                    setDisplayedText(text.substring(0, index - 1))
                    setIndex(index - 1)
                }

                if (index === 0) {
                    setIsDeleting(false)
                }
            }
        }, 
        
        // Тернарный оператор
        isDeleting ? deletingSpeed : typingSpeed);

        // Очистка таймера
        return () => clearTimeout(timer)
    }, 
    
    [isDeleting, index, text, typingSpeed, deletingSpeed, pauseDuration])

    return displayedText
};

