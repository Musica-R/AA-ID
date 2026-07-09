import { useEffect, useRef, useState } from 'react';

const useInView = (options = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(node); // animate only once
                }
            },
            {
                threshold: 0.25,
                ...options,
            }
        );

        observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    return [ref, isInView];
};

export default useInView;