import { Scorer } from "./scorer";

export interface ResponseScorers {
  count: number;
  scorers: Array<Scorer>;
}