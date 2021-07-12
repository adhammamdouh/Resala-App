import { CallStatus } from "./call-status.enum";
import { CallType } from "./call-type.enum";

export interface CallProperties {
    id: number;
    callType: CallType;
    status: CallStatus;
}
