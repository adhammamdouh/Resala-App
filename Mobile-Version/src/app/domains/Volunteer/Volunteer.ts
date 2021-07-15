import Address from "../Address/Address";
import Branch from "../Branch";
import NetworkType from "../Call/NetworkType";
import VolunteerKPI from "../KPI/VolunteerKPI";
import Organization from "../Organization";
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
    tShirt:number; //new
    miniCamp:boolean; //new
    volunteerKPI:VolunteerKPI;
    user:User;
    branch:Branch;
    networkType:NetworkType;
    role:Role;
    privileges:Privilege[];
    gender: number;
    organization: Organization; //new
    educationLevel: string; //new
    comments: string; //new
    //eventAttendances:Array<EventAttendance>[];
}