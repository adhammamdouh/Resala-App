import Committee from "../Committee/Committee";
import LeadVolunteerKPI from "../KPI/LeadVolunteerKPI";
import Volunteer from "./Volunteer";

export default interface LeadVolunteer{
    id:Number;
    myVolunteerInfo:Volunteer;
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