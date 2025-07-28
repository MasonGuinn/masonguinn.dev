import React, { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

export function TypingText({ text, as = 'p', className, speed = 50 }) {
    const Tag = as;
    // A ref for the parent tag (e.g., the h2)
    const containerRef = useRef(null);
    // A ref for the span that will contain the text
    const textSpanRef = useRef(null);

    const isInView = useInView(containerRef, { once: true });

    useEffect(() => {
        // Ensure we are in view and the ref is connected to an element
        if (isInView && textSpanRef.current) {
            const textNode = textSpanRef.current;
            let i = 0;

            const intervalId = setInterval(() => {
                // Directly update the text content of the span
                textNode.textContent = text.slice(0, i);
                i++;
                if (i > text.length) {
                    clearInterval(intervalId);
                    // Optional: hide the cursor when done typing
                    if (textNode.nextSibling) {
                        textNode.nextSibling.style.display = 'none';
                    }
                }
            }, speed);

            return () => clearInterval(intervalId);
        }
    }, [isInView, text, speed]);

    return (
        // The component renders its structure only once.
        <Tag ref={containerRef} className={className}>
            <span ref={textSpanRef}></span>
            {/* Blinking cursor */}
            <span>|</span>
        </Tag>
    );
}