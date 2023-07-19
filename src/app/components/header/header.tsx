import './header.scss';
import { useState, useEffect } from 'react';

import { Counter } from '../counter/counter';

export function Header(): JSX.Element {
    const [time, setTime] = useState(0);
    const [initialTimeStamp] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTimeStamp = Date.now();
            setTime(currentTimeStamp - initialTimeStamp);
        }, 10);
        return () => clearInterval(interval);
    }, [initialTimeStamp]);
    
    return (
        <div className="header">
            <Counter count={Math.floor(time / 1000)}></Counter>
            <div></div>
            <Counter count={123}></Counter>
        </div>
    );
}