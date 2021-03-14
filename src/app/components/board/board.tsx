import './board.scss';
import { Header } from '../header/header';

export function Board() : JSX.Element {
    return (
        <div className="board">
            <Header></Header>
            <div className="mine-field"></div>
        </div>
    );
}