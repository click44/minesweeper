import { useState, useEffect } from 'react';
import './counter.scss';

export function Counter({ count }: CounterProps): JSX.Element {
    const [currentCount, setCurrentCount] = useState(formatCount(count));

    useEffect(() => {
        setCurrentCount(formatCount(count))
    }, [count]);

    function formatCount(unformattedCount: number): string {
        let stringCount: string = unformattedCount.toString();
        const countLength = stringCount.length;
        if (countLength === 3) {
            return stringCount;
        } else if ( countLength > 3) {
            return stringCount.slice(0, 3);
        } else {
            let loops: number;
            for (loops = 3 - countLength; loops > 0; loops--) {
                stringCount = '0'  + stringCount;
            }
            return stringCount;
        }
    }

    return (
        <div className="counter">
            <div className="background-count">888</div>
            <div className="current-count">{currentCount}</div>
        </div>
    );
}

export interface CounterProps {
    count: number;
};