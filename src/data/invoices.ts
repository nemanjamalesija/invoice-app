import { add } from 'date-fns';

function fromToday(numDays: number, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const invoices = [
  {
    id: 1,
    created_at: fromToday(-18, true),
    paymentDue: fromToday(-6),
    streetAdress: '765 Krakowskie Przedmieście',
    city: 'Warsaw',
    postCode: 6200,
    country: 'Poland',
    clientName: 'Katarzyna Nowak',
    clientEmail: 'katarzyna.nowak@email.com',
    status: 'Pending'
  },
  {
    id: 2,
    created_at: fromToday(-20, true),
    paymentDue: fromToday(0),
    streetAdress: '1 Place Plume',
    city: 'Strasbourg',
    postCode: 12345,
    country: 'Country1',
    clientName: 'Elisa Vincent',
    clientEmail: 'vincent.fr@email.com',
    status: 'Paid'
  },
  {
    id: 3,
    created_at: fromToday(-4, true),
    paymentDue: fromToday(-4),
    streetAdress: '876 Gran Vía',
    city: 'Madrid',
    postCode: 4010,
    country: 'Spain',
    clientName: 'Carlos López',
    clientEmail: 'carlos.lopez@email.com',
    status: 'Paid'
  },

  {
    id: 4,
    created_at: fromToday(-33, true),
    paymentDue: fromToday(-23),
    streetAdress: '456 Elm St',
    city: 'Los Angeles',
    postCode: 90001,
    country: 'USA',
    clientName: 'Alice Johnson',
    clientEmail: 'alice.johnson@email.com',
    status: 'Pending'
  },
  {
    id: 5,
    created_at: fromToday(-27, true),
    paymentDue: fromToday(12),
    streetAdress: '789 Oak St',
    city: 'London',
    postCode: 53253,
    country: 'UK',
    clientName: 'Michael Brown',
    clientEmail: 'michael.brown@email.com',
    status: 'Paid'
  },

  {
    id: 6,
    created_at: fromToday(-45),
    paymentDue: fromToday(-45),
    streetAdress: '321 Pine St',
    city: 'Paris',
    postCode: 75001,
    country: 'France',
    clientName: 'Sophie Martin',
    clientEmail: 'sophie.martin@email.com',
    status: 'Cancelled'
  },
  {
    id: 7,
    created_at: fromToday(-27, true),
    paymentDue: fromToday(15),
    streetAdress: '789 Oak St',
    city: 'London',
    postCode: 1243,
    country: 'UK',
    clientName: 'Manny Pedrossi',
    clientEmail: 'pedrossi.manny@email.com',
    status: 'Pending'
  },
  {
    id: 8,
    created_at: fromToday(-5, true),
    paymentDue: fromToday(33),
    streetAdress: '543 Sir St',
    city: 'Madrid',
    postCode: 8532,
    country: 'Spain',
    clientName: 'Carlos Rodriguez',
    clientEmail: 'carlos.rodriguez@email.com',
    status: 'Cancelled'
  },

  {
    id: 9,
    created_at: fromToday(-14, true),
    paymentDue: fromToday(-14),
    streetAdress: '765 Birch St',
    city: 'Mexico City',
    postCode: 5500,
    country: 'Mexico',
    clientName: 'Ana Hernandez',
    clientEmail: 'ana.hernandez@email.com',
    status: 'Paid'
  },

  {
    id: 10,
    created_at: fromToday(-30, true),
    paymentDue: fromToday(-9),
    streetAdress: '123 Rosenstrasse',
    city: 'Berlin',
    postCode: 63312,
    country: 'Germany',
    clientName: 'Sophie Müller',
    clientEmail: 'sophie.mueller@email.com',
    status: 'Paid'
  },

  {
    id: 11,
    created_at: fromToday(-3, true),
    paymentDue: fromToday(18),
    streetAdress: '789 Via Roma',
    city: 'Rome',
    postCode: 34212,
    country: 'Italy',
    clientName: 'Giulia Rossi',
    clientEmail: 'giulia.rossi@email.com',
    status: 'Cancelled'
  },

  {
    id: 12,
    created_at: fromToday(-6, true),
    paymentDue: fromToday(-1),
    streetAdress: '567 Keizersgracht',
    city: 'Amsterdam',
    postCode: 22221,
    country: 'Netherlands',
    clientName: 'Anna van den Berg',
    clientEmail: 'anna.vandenberg@email.com',
    status: 'Cancelled'
  },

  {
    id: 13,
    created_at: fromToday(-16, true),
    paymentDue: fromToday(-16),
    streetAdress: '543 Strøget',
    city: 'Copenhagen',
    postCode: 7220,
    country: 'Denmark',
    clientName: 'Mads Hansen',
    clientEmail: 'mads.hansen@email.com',
    status: 'Paid'
  }
];
