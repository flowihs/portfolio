import { useEffect, useState } from 'react';

export default function useTypingEffect (text, typingSpeed = 150, deletingSpeed = 75, pauseDuration = 1000) {

    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {

            if (!isDeleting) {
                if (index < text.length) {
                    setDisplayedText(text.substring(0, index + 1))
                    setIndex(index + 1)
                }

                if (index === text.length) {
                    setTimeout(() => setIsDeleting(true), pauseDuration)
                }
            }
            
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
        
        isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer)
    }, 
    
    [isDeleting, index, text, typingSpeed, deletingSpeed, pauseDuration])

    return displayedText
};

