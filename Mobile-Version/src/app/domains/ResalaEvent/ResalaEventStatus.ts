import ResalaEvent from "./ResalaEvent";

export default interface ResalaEventStatus{
    id:Number;
    name:String;
    resalaEvents:Array<ResalaEvent>[];
}