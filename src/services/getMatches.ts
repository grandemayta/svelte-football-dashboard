import { httpWrapper } from "../core";
import { ResponseMatches } from "../models";

export const getMatches = async (competition: string, dateFrom: string, dateTo: string): Promise<ResponseMatches> => {
  const response = await httpWrapper(`competitions/${competition}/matches?limit=1&dateFrom=${dateFrom}&dateTo=${dateTo}`);

  if (!response.ok) {
    return Promise.reject();
  }

  const data: ResponseMatches = await response.json();
  const currentMatchDay = data.matches[0].matchday;

  data.matches = data.matches.filter(match => currentMatchDay === match.matchday);

  return data;
};
