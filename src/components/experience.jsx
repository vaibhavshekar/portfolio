import React, { useEffect, useRef } from 'react';

const Experience = () => {
    const experienceContainersRef = useRef([]);

    useEffect(() => {
        const experienceContainers = experienceContainersRef.current;

        function checkVisibility() {
            experienceContainers.forEach(container => {
                const rect = container.getBoundingClientRect();
                const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);

                if (isVisible && !container.classList.contains('animate')) {
                    container.classList.add('animate');
                } else if (!isVisible && container.classList.contains('animate')) {
                    container.classList.remove('animate');
                }
            });
        }

        // Initial check on page load
        checkVisibility();

        // Listen for scroll and resize events
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div class="experience">
            <div class="wrapper experience__wrapper bottom-border">
                <h2 class="experience__headline header-xl">Experience</h2>
                <div class="experience-timeline">
                    <div class="timeline-line"></div>
                    <div
                        class="experience-container right-cnt-exp"
                        ref={el => experienceContainersRef.current[0] = el}
                    >
                        <div class="experience-text-box">
                            <h3 class="exp-name">Telesto Energy | Internship</h3>
                            <small>Sept 2023 - Present</small>
                            <p>Coimbatore, Tamil Nadu, India.<br />
                                Responsible for developing interactive plots.<br />
                                <span class="exp-skills">Skills: HTML, CSS, JS, PlotlyJS, ChartJS, d3JS</span>
                            </p>
                        </div>
                    </div>
                    <div
                        class="experience-container left-cnt-exp"
                        ref={el => experienceContainersRef.current[1] = el}
                    >
                        <div class="experience-text-box">
                            <h3 class="exp-name">iDEA Amrita | Full-time</h3>
                            <small>Sept 2023 - Present</small>
                            <p>Coimbatore, Tamil Nadu, India.<br />
                                Responsible for developing interactive plots.<br />
                                <span class="exp-skills">Skills: HTML, CSS, JS, PlotlyJS, ChartJS, d3JS</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
