import { CallStatus } from "src/app/Enums/call-status.enum";

export class CallProperties {
  constructor() {}
  public callStatus: CallStatus;
  public name: string;
  public phoneNumber: string;
  public birthDate: Date;
  public callResult: string; //TODO
  public eventAttend: string; //TODO
  public Notes: string;
  public callNumber: number = 5;
  public totalCallsCount: number = 25;
}
