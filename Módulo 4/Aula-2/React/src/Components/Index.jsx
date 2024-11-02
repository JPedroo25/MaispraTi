import React, { useState } from 'react';
import './App.css';

const Index = () => {
    const [activePanel, setActivePanel] = useState('whyReact');

    const tradePanel = (panel) => {
        setActivePanel(panel);
    };

    return (
        <div>
            <header>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEliY4uFE-CpqIAV8Ny_A2Old4EcuhjbojrA&s"
                    alt="js logo"
                />
                <div className="header-text">
                    <h1>Vanilla JavaScript</h1>
                    <h3>i.e., JavaScript without any (UI) framework or library</h3>
                </div>
            </header>

            <div>
                <button className="aba-1" onClick={() => tradePanel('whyReact')}>
                    Why React?
                </button>
                <button className="aba-2" onClick={() => tradePanel('coreFeatures')}>
                    Core Features
                </button>
                <button className="aba-3" onClick={() => tradePanel('relatedResources')}>
                    Related Resources
                </button>

                <div className={`panel ${activePanel === 'whyReact' ? 'visible' : ''}`}>
                    <ul>
                        <li>React is extremely popular</li>
                        <li>It makes building complex, interactive UIs a breeze</li>
                        <li>It's powerful & flexible</li>
                        <li>It has a very active and versatile ecosystem</li>
                    </ul>
                </div>

                <div className={`panel ${activePanel === 'coreFeatures' ? 'visible' : ''}`}>
                    <ul>
                        <li>Components, JSX & Props</li>
                        <li>State</li>
                        <li>Hooks (e.g., useEffect())</li>
                        <li>Dynamic rendering</li>
                    </ul>
                </div>

                <div className={`panel ${activePanel === 'relatedResources' ? 'visible' : ''}`}>
                    <ul>
                        <li>Official web page (react.dev)</li>
                        <li>Next.js (Fullstack framework)</li>
                        <li>React Native (build native mobile apps with React)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Index;