import { Injectable } from '@angular/core';
import { accessRights, AccessRightsRolls,  } from 'src/app/data/general-data.enum';
import Privilege from 'src/app/domains/Privilege/Privilege';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeHandlerService {
  roles: boolean[] = [];

  constructor() { 
    /*for(let i = 0 ; i < AccessRightsRolls.accessRightsStr.length ; ++i) {
      console.log(accessRights[AccessRightsRolls.accessRightsStr[i]]);
      //this.roles[accessRights[Privilege.accessRightsStr[i]]] = true;
      console.log(this.roles[accessRights[AccessRightsRolls.accessRightsStr[i]]]);
    }*/
  }

  fillRoles(privilege: Privilege[]) {
    console.log('filling');
    for(let i = 0 ; i < privilege.length ; ++i) {
      for( let k = 0 ; k < privilege[i].actions.length; ++k) {
        for(let j = 0; j < AccessRightsRolls.accessRightsStr.length ;++j) {
          if(privilege[i].actions[k].name === AccessRightsRolls.accessRightsStr[j]) {
            console.log(privilege[i].actions[k].name);
            this.roles[accessRights[AccessRightsRolls.accessRightsStr[j]]] = true;
            break;
          }
        }
      }
      
    }

    /*for(let i = 0 ; i < AccessRightsRolls.accessRightsStr.length ; ++i) {
      console.log(accessRights[AccessRightsRolls.accessRightsStr[i]]);
      //this.roles[accessRights[Privilege.accessRightsStr[i]]] = true;
      console.log(this.roles[accessRights[AccessRightsRolls.accessRightsStr[i]]]);
    }*/
  }

  isGetByStatusPrivilegeValid() {
    return (this.roles[accessRights.ROLE_GET_ALL_VOLUNTEERS_BY_STATUS] || 
      this.roles[accessRights.ROLE_GET_ALL_VOLUNTEERS_PUBLIC_INFO_BY_STATUS] || 
      this.roles[accessRights.ROLE_GET_ALL_VOLUNTEERS_BY_STATUS_AND_MY_BRANCH] || 
      this.roles[accessRights.ROLE_GET_ALL_VOLUNTEERS_PUBLIC_INFO_BY_STATUS_AND_MY_BRANCH])
  }

  isCreateVolunteerValid() {
    return this.roles[accessRights.ROLE_CREATE_VOLUNTEER];
  }

  isAddEventValid() {
    return this.roles[accessRights.ROLE_ADD_EVENT];
  }

  isShowRequestToArchiveValid() {
    return this.isAcceptToArchiveValid() || this.isDeclineToArchiveValid();
  }

  isAcceptToArchiveValid() {
    return this.roles[accessRights.ROLE_ACCEPT_TO_ARCHIVE_VOLUNTEER];
  }

  isDeclineToArchiveValid() {
    return this.roles[accessRights.ROLE_DECLINE_TO_ARCHIVE_VOLUNTEER]
  }

  isArchiveEventValid() {
    return this.roles[accessRights.ROLE_ARCHIVE_EVENT];
  }

  isCompleteEventValid() {
    return this.roles[accessRights.ROLE_COMPLETE_EVENT];
  }

  isUpdateEventValid() {
    return this.roles[accessRights.ROLE_UPDATE_EVENT];
  }

  isGetAssignedCallsValid() {
    return this.roles[accessRights.ROLE_GET_ASSIGNED_CALLS];
  }

  isSubmitAssignedCallsValid() {
    return this.roles[accessRights.ROLE_SUBMIT_ASSIGNED_CALLS];
  }

  isAssignCallsValid() {
    return this.roles[accessRights.ROLE_ASSIGN_CALLS];
  }
}
