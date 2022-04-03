import { Attributes } from "./attribute-model";
import { Link } from "./subtypes-model";

export class GenreWrapper{
    data: Genre;
}

export class Genre {
    id: string;
    type: string;
    links: Link;
    attributes: Attributes;
}