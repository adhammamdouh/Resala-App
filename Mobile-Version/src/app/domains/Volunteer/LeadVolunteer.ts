import Address from "../Address/Address";
import Branch from "../Branch";
import NetworkType from "../Call/NetworkType";
import Committee from "../Committee/Committee";
import LeadVolunteerKPI from "../KPI/LeadVolunteerKPI";
import VolunteerKPI from "../KPI/VolunteerKPI";
import Organization from "../Organization";
import Privilege from "../Privilege/Privilege";
import User from "../User";
import EducationLevel from "./EducationalLevel";
import Role from "./Role";
import Shirt from "./shirt";
import Volunteer from "./Volunteer";
import VolunteerStatus from "./VolunteerStatus";

export default interface LeadVolunteer{
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
    personalImageUrl:String;
    resalaObjective:String;
    personalObjective:String;
    selfSkills:String;
    dreams:String;
    nationalIdUrl:String;
    doctorMeeting: Boolean;
    graduationDate:Date;
    graduationNumber:Number;
    camp48:Number;
    graduated:Boolean;
    omra:Date;
    committee:Committee;
    leadVolunteerKPI: LeadVolunteerKPI;
}