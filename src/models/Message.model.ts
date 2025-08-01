export interface Message {
  landlordEmail: string;
  tenantEmail: string;
  dateTime: Date;
  subject: string;
  message: string;
  status: 'seen' | 'not seen';
}
