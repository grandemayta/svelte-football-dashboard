import { httpWrapper } from "../core";
import { ResponseMatches } from "../models";

export const getMatches = async (code: string, currentMatchday: number): Promise<ResponseMatches> => {
  const response = await httpWrapper(`competitions/${code}/matches?matchday=${currentMatchday}`);

  if (!response.ok) {
    return Promise.reject();
  }

  const data: ResponseMatches = await response.json();
  const currentMatchDay = data.matches[0].matchday;

  data.matches = data.matches.filter(match => currentMatchDay === match.matchday);

  return data;
};
