import { Anime } from "./anime-model";

export class AnimeResource {
    data: Anime[];
    meta: { count: number };
    links: { first: string, next: string, last: string }
}