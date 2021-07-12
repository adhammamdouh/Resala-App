import Branch from "../Branch";
import ResalaEventResult from "./ResalaEventResult";
import ResalaEventStatus from "./ResalaEventStatus";

export default interface ResalaEvent{
    id:Number;
    name:String;
    fromDate:Date;
    toDate:Date;
    callsStartTime:Date;
    script:String;
    description:String;
    hasCalls:Boolean;
    shareable:Boolean;
    resalaEventResult:ResalaEventResult;
    branches:Array<Branch>[];
    resalaEventStatus:ResalaEventStatus;
}