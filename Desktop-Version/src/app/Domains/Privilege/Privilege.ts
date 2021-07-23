import Action from "./Action";

export default interface Privilege{
    id:Number;
    name:String;
    actions: Action[];
}