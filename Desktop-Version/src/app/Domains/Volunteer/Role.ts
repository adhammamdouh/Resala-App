import Volunteer from "./Volunteer";

export default interface Role{
    id:Number;
    name:String;
    volunteers:Array<Volunteer>[];
}