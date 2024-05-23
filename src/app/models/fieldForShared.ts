export interface IField {
  field: string;
  fieldName?: string;
  type: string;
  value: any;
  options?: Option[];
  click?: Function;
}
interface Option {
  value: string;
}
