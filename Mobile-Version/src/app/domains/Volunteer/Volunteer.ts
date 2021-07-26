import Address from "../Address/Address";
import Branch from "../Branch";
import NetworkType from "../Call/NetworkType";
import VolunteerKPI from "../KPI/VolunteerKPI";
import Organization from "../Organization";
import Privilege from "../Privilege/Privilege";
import User from "../User";
import EducationLevel from "./EducationalLevel";
import Role from "./Role";
import Shirt from "./shirt";
import VolunteerStatus from "./VolunteerStatus";

export default interface Volunteer{
    id:number;
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
    shirt:Shirt; //new
    miniCamp:boolean; //new
    volunteerKPI:VolunteerKPI;
    user:User;
    branch:Branch;
    networkType:NetworkType;
    role:Role;
    privileges:Privilege[];
    gender: number;
    organization: Organization; //new
    educationLevel: EducationLevel; //new
    comments: string; //new
    volunteerStatus: VolunteerStatus;
    age: number;
    //eventAttendances:Array<EventAttendance>[];
}