export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  flags: {
    svg: string;
    png: string;
  };
  capital: string[];
  region: string;
  cca3: string;
  subregion: string;
  population: number;
  borders: string[];
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  flag: string;
}

export interface FilterState {
  search: string;
  filter: string;
}
