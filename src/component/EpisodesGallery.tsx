import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./CharacterGallery.css"
import {Episodes} from "../model/Episodes";
import EpisodesCard from "./EpisodesCard";

type EpisodesGalleryProps = {
    Episodes: Episodes[],
}

export default function EpisodesGallery(props: EpisodesGalleryProps) {

    const episodesCard = props.Episodes.map((Episodes) => {
        return (
            <EpisodesCard Episodes={Episodes} key={Episodes.id+ " " + Episodes.name}/>
        );
    });

return (
    <>
        {episodesCard}
    </>
)

}