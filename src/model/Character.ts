import {Origin} from "./Origin";
import {Episodes} from "./Episodes";

export type Character = {
    id: number,
    name: string,
    origin: Origin,
    status: string,
    image: string,
    episode:Episodes[]
}