export interface IDettagliProfessionista {
  nome: string;
  cognome: string;
  citta: string;
  professione: string;
  eta: number;
}

export interface IRisposta {
  ris: number;
}

export interface IFeedback {
  id_professionista: string;
  voto: number;
}
