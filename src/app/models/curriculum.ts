export interface ICurriculum {
  id: number;
  title: string;
  year: number;
  statusId: number;
  statusName: string;
  filePath: ArrayBuffer | Blob | FormData;
  lastModified: Date;
  developerName: string;
  developerId: number;
  educationFormId: number;
  educationFormName: string;
  expiryDate: Date;
}
