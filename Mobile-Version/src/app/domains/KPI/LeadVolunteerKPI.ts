import LeadVolunteer from "../Volunteer/LeadVolunteer";

export default interface LeadVolunteerKPI{
    id:Number;
    presentCount:Number;
    ensureCount:Number;
    callsCount:Number;
    leadVolunteer:LeadVolunteer;
}