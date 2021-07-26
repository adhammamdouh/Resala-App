import Organization from "./Organization";
import Privilege from "./Privilege/Privilege";
import UserType from "./UserType";
import Volunteer from "./Volunteer/Volunteer";

export default interface User {
    sub:string;
    first_name: string;
    mid_name: string;
    last_name: string;
    myBranch:number;
    type: string;
    role_name: string;
    aud: Privilege[];
    myOrganization: number;
    user_id: number;
    myCommittee: number;
    exp: Date;
    iat: Date;
    id: number;
    myCommitteeName: string;
}