import {Character} from "../model/Character";
import "./CharacterCard.css";
import {Episodes} from "../model/Episodes";



type EpisodesCardProps = {
    Episodes: Episodes,
}

export default function EpisodesCard(props: EpisodesCardProps) {
    return (
        <section className={"Episodes-card"}>
            <h2 className={"Episodes-card-id"}>{props.Episodes.id}</h2>
            <p className={"Episodes-card-name"}>{props.Episodes.name}</p>
            <p className={"Episodes-card-air_date"} >{props.Episodes.air_date}</p>
            <p className={"Episodes-card-url"}>{props.Episodes.url}</p>
            <p className={"Episodes-card-chracters"}>{props.Episodes.characters.map(character => <span key={character}>{character}</span>)}</p>
             </section>
    );
}