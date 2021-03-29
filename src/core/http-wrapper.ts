import { FOOTBALL_BASE_URL, TOKEN_1, TOKEN_2, TOKEN_3, TOKEN_4 } from "../constants";

const getTokenBaseonCompetitionId = (endpoint: string): string => {
  switch(true) {
    case /SA/.test(endpoint):
      return TOKEN_1;
    case /PD/.test(endpoint):
      return TOKEN_2;
    case /PL/.test(endpoint):
      return TOKEN_3;
    default:
      return TOKEN_4;
  }

};

export const httpWrapper = (endpoint: string): Promise<Response> => {
  const headers = { 
    'X-Auth-Token': getTokenBaseonCompetitionId(endpoint),
  };

  return fetch(`${FOOTBALL_BASE_URL}/${endpoint}`, { headers } );
};