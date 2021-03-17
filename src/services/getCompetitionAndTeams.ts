import { httpWrapper } from "../core";

export const getCompetitionAndTeams = async (competitionId: number, competitioCode: string): Promise<CompetitionAndTeams> => {
    const responses = await Promise.all([
      httpWrapper(`competitions/${competitionId}`),
      httpWrapper(`competitions/${competitioCode}/teams`)
    ]);

    if(!responses[0].ok || !responses[1].ok) {
      return Promise.reject();
    }

    const { area, code, id, currentSeason, name } = await responses[0].json();
    const { teams } = await responses[1].json();

    const teamsByKey = teams.reduce((acc: TeamWithKey, team: Team) => {
      acc[team.id] = team;
      return acc;
    }, {});

    return {
      area,
      code,
      id,
      currentSeason,
      name,
      teams,
      teamsByKey
    };
};
