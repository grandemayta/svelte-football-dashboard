interface Match {
    id: number;
    season: Season;
    utcDate: Date;
    status: string;
    matchday: number;
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
}