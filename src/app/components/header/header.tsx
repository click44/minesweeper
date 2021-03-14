import './header.scss';
import { useState, useEffect } from 'react';

import { Counter } from '../counter/counter';

export function Header(): JSX.Element {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    });
    
    return (
        <div className="header">
            <Counter count={time}></Counter>
            <div></div>
            <Counter count={123}></Counter>
        </div>
    );
}