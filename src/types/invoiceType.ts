type InvoiceItemType = { items: { price: number } };

export type InvoiceType = {
  id: number;
  created_at: string;
  streetAdress?: string;
  city?: string;
  postCode?: number;
  country?: string;
  clientName: string;
  clientEmail: string;
  invoice_items: InvoiceItemType[];
  paymentDue: string;
  status: string;
};
