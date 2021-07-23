import Branch from "../Branch";
import ResalaEventResult from "./ResalaEventResult";
import ResalaEventStatus from "./ResalaEventStatus";

export default interface ResalaEvent {
    id: Number;
    name: String;
    invitationStartTime:string,
    invitationEndTime:string,
    feedBackStartTime:string,
    feedBackEndTime:string,
    notAttendStartTime:string,
    notAttendEndTime:string,
    fromDate: string;
    toDate: string;
    script: String;
    description: String;
    hasCalls: Boolean;
    shareable: Boolean;
    resalaEventResult: ResalaEventResult;
    branches: Array < Branch > [];
    resalaEventStatus: ResalaEventStatus;
}