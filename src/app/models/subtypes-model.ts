export class ImageType {
    large: string;
    original: string;
    small: string;
    tiny: string;
    medium: string;
}

export class Relationships {
    categories: Categories
    characters: Characters
    episodes: Episodes
    genres: Genres
    reviews: Reviews
}

export class Categories{
    links: Link;
}

export class Characters{
    links: Link;
}

export class Episodes{
    links: Link;
}

export class Genres{
    links: Link;
}

export class Reviews{
    links: Link;
}

export class Link {
    self: string;
    related: string;
}