import NetworkType from "../Call/NetworkType";
import ResalaEvent from "../ResalaEvent/ResalaEvent";
import Volunteer from "./Volunteer";

export default interface NetworkTypeAssignedToVolunteersToEvent{
    id:Number;
    volunteers:Array<Volunteer>[];
    networkType:NetworkType;
    resalaEvent:ResalaEvent;
}