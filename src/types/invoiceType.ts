import type { InvoiceItemsType } from './ItemType';

export type InvoiceType = {
  id: number;
  created_at: string;
  streetAdress: string;
  city: string;
  postCode: number;
  country: string;
  clientName: string;
  clientEmail: string;
  invoice_items: InvoiceItemsType;
  paymentDue: string;
  status: string;
  itemsId: string[];
};
