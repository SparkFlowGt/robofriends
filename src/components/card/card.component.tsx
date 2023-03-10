import { Monster } from '../../App';
import './card.style.css';

type CardProps={
    monster:Monster;
}

export const Card=({monster}:CardProps)=>(
    <div className="card-container">
        <img alt='monster'
         src={`https://robohash.org/${monster.id}?200x200`}/>

        <h1>{monster.name}</h1>
    </div>
);
