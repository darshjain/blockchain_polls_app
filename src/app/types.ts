// interface
export interface Poll {
  id: number;
  question: string;
  results: number[];
  options: string[];
  thumbnail: string;
  voted:boolean;
}

export interface Voter {
  id: string;
  voted: number[];
}
