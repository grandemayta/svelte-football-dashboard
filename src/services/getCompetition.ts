import { httpWrapper } from "../core";
import { ResponseCompetition } from "../models";

export const getCompetition = async (competition: string): Promise<ResponseCompetition> => {
  const response = await httpWrapper(`competitions/${competition}/teams`);

  if (!response.ok) {
    return Promise.reject();
  }
  
  return response.json();
};
