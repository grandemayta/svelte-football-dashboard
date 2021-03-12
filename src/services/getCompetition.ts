import { httpWrapper } from "../core";
import { ResponseCompetition } from "../models";

export const getCompetition = async (competitionId: number): Promise<ResponseCompetition>  => {
  const response = await httpWrapper(`competitions/${competitionId}`);

  if (!response.ok) {
    return Promise.reject();
  }
  
  return response.json();
};