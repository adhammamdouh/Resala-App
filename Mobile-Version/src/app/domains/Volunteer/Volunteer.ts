import Address from "../Address/Address";
import Branch from "../Branch";
import NetworkType from "../Call/NetworkType";
import VolunteerKPI from "../KPI/VolunteerKPI";
import Privilege from "../Privilege/Privilege";
import User from "../User";
import Role from "./Role";

export default interface Volunteer{
    id:Number;
    address:Address;
    faculty:string;
    nationalId:string;
    university:string;
    firstName:string;
    lastName:string;
    midName:string;
    nickName:string;
    phoneNumber:string;
    joinDate:Date;
    birthDate:Date;
    tShirt:boolean;
    miniCamp:Date;
    volunteerKPI:VolunteerKPI;
    user:User;
    branch:Branch;
    networkType:NetworkType;
    role:Role;
    privileges:Privilege[];
    gender: number;
    //eventAttendances:Array<EventAttendance>[];
}