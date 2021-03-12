import { Area } from "./area";
import { CurrentSeason } from "./current-season";

export interface ResponseCompetition {
  id: number;
  area: Area;
  code: string;
  name: string;
  currentSeason: CurrentSeason;
}