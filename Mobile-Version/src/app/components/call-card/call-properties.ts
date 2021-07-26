import { CallStatus } from "./call-status.enum";
import { CallTypes } from "./call-type.enum";

export interface CallProperties {
    id: number;
    callType: CallTypes;
    status: CallStatus;
}
