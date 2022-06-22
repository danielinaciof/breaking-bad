import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import './styles.scss';
export function Character() {

    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function getCharacter() {
            const response = await fetch(`https://breakingbadapi.com/api/characters/${id}`)
            const data = await response.json();
            console.log(data[0])
            setCharacter(data[0])
        }
        getCharacter();
    }, [id])

    return (
        <div className="character-container">
            <div className="character-img">
                <img  src={character?.img} alt={character?.name} />
            </div>
            <div className="character-info">
                <div><h1>{character?.name}</h1></div>
                <div>{character?.nickname}</div>
                <div>{character?.birthday}</div>
                <div>{character?.category}</div>
                <div>{character?.status}</div>
                <div>{character?.occupation && character?.occupation.map(item => item).join(', ')}</div>
            </div>
        </div>
    )
}