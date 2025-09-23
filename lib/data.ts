import fs from 'fs';
import path from 'path';

export interface HeaderData {
  logo: {
    text: string;
    imageUrl: string;
  };
  navigation: Array<{
    label: string;
    href: string;
    active: boolean;
    submenu?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  cta: {
    label: string;
    href: string;
  };
}

export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  screenshots: string[];
  features: string[];
  releaseDate: string;
  platforms: string[];
  genre: string;
  rating: number;
  downloads: string;
  trailer: string;
}

export interface GamesData {
  games: Game[];
  featured: string;
  categories: Array<{
    name: string;
    count: number;
  }>;
}

export interface AppPricesData {
  appPrices: {
    [key: string]: {
      title: string;
      price: string;
      period: string;
      features: string[];
      popular: boolean;
      buttonText: string;
      buttonUrl: string;
    };
  };
  discounts: {
    annual: {
      percentage: number;
      description: string;
    };
  };
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  category: string;
}

export interface PartnersData {
  partners: Partner[];
  categories: string[];
  stats: {
    totalPartners: number;
    activeParnerships: number;
    countries: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    [key: string]: string;
  };
  skills: string[];
}

export interface TeamData {
  team: TeamMember[];
  departments: string[];
  stats: {
    totalMembers: number;
    foundingYear: number;
    locations: string[];
  };
}

export interface FooterData {
  company: {
    name: string;
    description: string;
    logo: string;
  };
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
  social: {
    [key: string]: string;
  };
  navigation: {
    [key: string]: Array<{
      label: string;
      href: string;
    }>;
  };
  legal: {
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };
}

const dataDirectory = path.join(process.cwd(), 'data');

export function getStaticData<T>(filename: string): T {
  const filePath = path.join(dataDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getHeaderData(): HeaderData {
  return getStaticData<HeaderData>('header.json');
}

export function getGamesData(): GamesData {
  return getStaticData<GamesData>('games.json');
}

export function getAppPricesData(): AppPricesData {
  return getStaticData<AppPricesData>('app-prices.json');
}

export function getPartnersData(): PartnersData {
  return getStaticData<PartnersData>('partners.json');
}

export function getTeamData(): TeamData {
  return getStaticData<TeamData>('team.json');
}

export function getFooterData(): FooterData {
  return getStaticData<FooterData>('footer.json');
}