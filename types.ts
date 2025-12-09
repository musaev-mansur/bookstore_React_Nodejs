export type Language = 'RU' | 'EN' | 'FR' | 'NL';

export interface NavItem {
  id: string;
  label: Record<Language, string>;
}

export interface Review {
  author: string;
  role: string;
  text: string;
}

export interface ComicPage {
  id: number;
  imageUrl: string;
  caption: string;
}
