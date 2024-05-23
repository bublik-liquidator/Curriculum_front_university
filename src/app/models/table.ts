type TableDataValue =
  | string
  | number
  | boolean
  | Date
  | string[]
  | ArrayBuffer
  | FormData
  | Blob
  | undefined;

export interface ITableData {
  id: number;
  [key: string]:
    | TableDataValue
    | { display: string }
    | { display: string; download: () => void }
    | undefined;
}
