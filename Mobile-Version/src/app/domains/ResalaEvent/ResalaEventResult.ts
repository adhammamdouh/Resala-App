import Branch from "../Branch";
import ResalaEvent from "./ResalaEvent";

export default interface ResalaEventResult{
    id:Number;
    responsePercentage:Number;
    attendancePercentage:Number;
    attractingPercentage:Number;
    ensurePercentage:Number;
    presentCount:Number;
    callsCount:Number;
    resalaEvent:ResalaEvent;
    branch:Branch;
} 