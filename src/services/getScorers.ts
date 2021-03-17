import { httpWrapper } from "../core";

export const getScorers = async (code: string): Promise<ResponseScorers> => {
  const response = await httpWrapper(`competitions/${code}/scorers`);

  if (!response.ok) {
    return Promise.reject();
  }
  
  return response.json();
};