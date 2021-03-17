interface CompetitionAndTeams {
  id: number;
  area: Area;
  code: string;
  name: string;
  currentSeason: CurrentSeason;
  teams: Array<Team>
  teamsByKey: TeamWithKey
}