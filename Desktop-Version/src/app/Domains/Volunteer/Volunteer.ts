import Address from "../Address/Address";
import Branch from "../Branch";
import NetworkType from "../Call/NetworkType";
import VolunteerKPI from "../KPI/VolunteerKPI";
import Organization from "../Organization/Organization";
import Privilege from "../Privilege/Privilege";
import User from "../User";
import Role from "./Role";

export default interface Volunteer{
    id:Number;
    address:Address;
    faculty:String;
    nationalId:String;
    university:String;
    firstName:String;
    lastName:String;
    midName:String;
    nickName:String;
    phoneNumber:String;
    joinDate:Date;
    birthDate:Date;
    shirt:any;
    miniCamp:boolean;
    volunteerKPI:VolunteerKPI;
    user:User;
    branch:Branch;
    networkType:NetworkType;
    role:Role;
    privileges:Privilege[];
    gender: number;
    comments: string;
    educationLevel: {
        id,
        name
    };
    organization: Organization;
    age:number;
    //eventAttendances:Array<EventAttendance>[];
}