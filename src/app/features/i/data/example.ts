import { CodeTab } from '../../s/data';

export const Iexample: Array<CodeTab> = [
  {
    name: `Without Interface Segrigation`,
    code: `export interface Unit {
      group: string;
      building: string;
      unit: string;
      paidAmount: number;
      paymentMethodId: number;
      paymentTypeId: number;
      id: number;
      attachmentDTOList: Attachment[];
    }`,
  },
  {
    name: `with Interface Segrigation`,
    code: `export interface UnitLocation {
      group: string;
      building: string;
      unit: string;
    }

export interface Payment extends UnitLocation {
  paidAmount: number;
  paymentMethodId: number;
  paymentTypeId: number;
}

export interface UnitRequest extends UnitLocation{
  id: number;
  attachmentDTOList: Attachment[];
}
    `,
  },
];
