import { CallStatus } from "src/app/Enums/call-status.enum";

export interface CallProperties {
  callStatus: CallStatus;
  name: string;
  phoneNumber: string;
  callResult: string; 
  eventAttend: string;
  notes: string;
  callNumber: number;
  totalCallsCount: number;
}
