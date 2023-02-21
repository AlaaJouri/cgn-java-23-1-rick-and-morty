import {Origin} from "./Origin";
import {Character} from "../model/Character";


export type Episodes = {
    id: number,
    name: string,
    air_date:string,
    characters: string[],
    url: string,
}