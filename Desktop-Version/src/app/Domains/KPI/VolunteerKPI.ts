import Volunteer from "../Volunteer/Volunteer";

export default interface VolunteerKPI{
    id:Number;
    callsCount:Number;
    presentCount:Number;
    ensureCount:Number;
    responseCount:Number;
    volunteer:Volunteer;
}