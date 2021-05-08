// interface
export interface Poll {
  id: number;
  question: string;
  result: number[];
  options: string[];
  thumbnail: string;
}

export interface Voter {
  id: string;
  voted: number[];
}
