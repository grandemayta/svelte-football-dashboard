import { httpWrapper } from "../core";

export const getStandings = async (code: string): Promise<ResponseStandings> => {
  const response = await httpWrapper(`competitions/${code}/standings?standingType=TOTAL`);

  if (!response.ok) {
    return Promise.reject();
  }

  const data = await response.json();

  return {
    standings: data.standings[0].table
  };
};