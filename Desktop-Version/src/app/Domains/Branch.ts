import Volunteer from "./Volunteer/Volunteer";

export default interface Branch{
    id:Number;
    name:String;
    volunteers:Array<Volunteer>[];
}