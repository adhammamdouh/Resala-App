import Branch from "../Branch";
import ResalaEventResult from "./ResalaEventResult";
import ResalaEventStatus from "./ResalaEventStatus";

export default interface ResalaEvent{
    id:number;
    name:String;
    fromDate:Date;
    toDate:Date;
    invitationStartTime:Date;
    feedBackStartTime:Date;
    notAttendStartTime:Date;
    invitationEndTime:Date;
    feedBackEndTime:Date;
    notAttendEndTime:Date;
    script:String;
    description:String;
    hasCalls:Boolean;
    shareable:Boolean;
    eventResult:ResalaEventResult;
    branches:Branch[];
    eventStatus:ResalaEventStatus;
}