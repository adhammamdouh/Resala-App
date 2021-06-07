import Branch from "../Branch";
import ResalaEvent from "../ResalaEvent/ResalaEvent";
import Volunteer from "../Volunteer/Volunteer";
import CallResult from "./CallResult";
import CallType from "./CallType";
import NetworkType from "./NetworkType";

export default interface Calls {
    id:Number;
    invitationComment:String;
    feedBackComment:String;
    notAttendComment:String;
    resalaEvent:ResalaEvent;
    caller:Volunteer;
    receiver:Volunteer;
    callType:CallType;
    networkType:NetworkType;
    invitationTime:Date;
    feedBackTime:Date;
    notAttendTime:Date;
    timeUnEditableBefore:Date;
    callResult:CallResult;
    branch:Branch;
}