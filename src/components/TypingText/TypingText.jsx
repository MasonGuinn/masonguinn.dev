import React, { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

/**
 * A React component that simulates a typing effect for a given text.
 * The text is revealed character by character over time.
 *
 * @param {Object} props - The component's properties.
 * @param {string} props.text - The text to be typed out.
 * @param {string} [props.as='p'] - The HTML tag to render the text within (e.g., 'h1', 'p', 'span').
 * @param {string} [props.className] - CSS classes to apply to the rendered HTML tag.
 * @param {number} [props.speed=50] - The speed of typing in milliseconds per character.
 *
 * @example
 * <TypingText text="Hello, world!" as="h1" className="text-blue-500" speed={100} />
 *
 * @returns {JSX.Element} The rendered component with the typing effect.
 */
export function TypingText({ text, as = 'p', className, speed = 50 }) {
    const Tag = as;
    // A ref for the parent tag (e.g., the h2)
    const containerRef = useRef(null);
    // A ref for the span that will contain the text
    const textSpanRef = useRef(null);

    // Hook to detect if the component is in the viewport, triggers animation once.
    const isInView = useInView(containerRef, { once: true });

    useEffect(() => {
        // Ensure we are in view and the ref is connected to an element
        if (isInView && textSpanRef.current) {
            const textNode = textSpanRef.current;
            let i = 0; // Initialize character index

            // Set up an interval to reveal characters one by one
            const intervalId = setInterval(() => {
                // Directly update the text content of the span
                textNode.textContent = text.slice(0, i);
                i++; // Move to the next character

                // If all characters are typed, clear the interval
                if (i > text.length) {
                    clearInterval(intervalId);
                    // Optional: hide the cursor when done typing
                    if (textNode.nextSibling) {
                        textNode.nextSibling.style.display = 'none';
                    }
                }
            }, speed); // Typing speed in milliseconds per character

            // Cleanup function: clear the interval if the component unmounts or dependencies change
            return () => clearInterval(intervalId);
        }
    // Dependencies for the effect: re-run if isInView, text, or speed changes
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