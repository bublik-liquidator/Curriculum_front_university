import { ICurriculum } from './curriculum';

export interface ISearchCurriculumsResponse {
  curriculums: ICurriculum[];
  total: number;
}
