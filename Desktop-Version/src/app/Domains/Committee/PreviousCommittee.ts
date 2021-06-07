import LeadVolunteer from "../Volunteer/LeadVolunteer";
import Role from "../Volunteer/Role";
import Committee from "./Committee";

export default interface PreviousCommittee{
    id:Number;
    leadVolunteer:LeadVolunteer;
    role:Role;
    committee:Committee;
}