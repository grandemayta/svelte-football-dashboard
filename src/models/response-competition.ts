import { Competition } from "./competition";
import { Team } from "./team";

export interface ResponseCompetition {
    teams: Array<Team>;
    competition: Competition
}