import Branch from "../Branch";
import ResalaEvent from "../ResalaEvent/ResalaEvent";
import Volunteer from "../Volunteer/Volunteer";
import CallResult from "./CallResult";
import CallType from "./CallType";
import NetworkType from "./NetworkType";

export default interface Calls {
    id:number;
    invitationComment:String;
    feedBackComment:String;
    notAttendComment:String;
    resalaEvent:ResalaEvent;

    caller:Volunteer;
    receiver:Volunteer;
    callType:CallType;

    networkType:NetworkType;
    
    invitationUnEditableBefore:Date;
    feedBackUnEditableBefore:Date;
    notAttendUnEditableBefore:Date;
    
    timeUnEditableBefore:Date;
    
    feedBackCallResult:CallResult;
    notAttendCallResult:CallResult;
    invitationCallResult:CallResult;

    branch:Branch;
    completed: boolean;
}