import { httpWrapper } from "../core";
import { ResponseTeams } from "../models";

export const getTeams = async (code: string): Promise<ResponseTeams> => {
  const response = await httpWrapper(`competitions/${code}/teams`);

  if (!response.ok) {
    return Promise.reject();
  }
  
  return response.json();
};
