import { Attributes } from "./attribute-model";
import { Link, Relationships } from "./subtypes-model";

export class Anime {
    id: string;
    attributes: Attributes;
    links: Link;
    relationships: Relationships;
    type: string;
}