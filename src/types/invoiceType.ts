export type InvoiceType = {
  id: number;
  createdAt: string;
  streetAdress: string;
  city: string;
  postCode: number;
  country: string;
  clientName: string;
  clientEmail: string;
  paymentDue: string;
  status: string;
  itemsId: string[];
};
