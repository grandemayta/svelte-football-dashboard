import { FOOTBALL_BASE_URL, FOOTBALL_TOKEN } from "../constants";

export const httpWrapper = (endpoint: string): Promise<Response> => {
  const headers = { 
    'X-Auth-Token': FOOTBALL_TOKEN
  };

  return fetch(`${FOOTBALL_BASE_URL}/${endpoint}`, { headers } );
};