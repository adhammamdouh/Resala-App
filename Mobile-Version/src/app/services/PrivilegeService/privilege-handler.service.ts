import { Injectable } from '@angular/core';
import { accessRights, AccessRightsRolls,  } from 'src/app/data/general-data.enum';
import Privilege from 'src/app/domains/Privilege/Privilege';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeHandlerService {
  roles: boolean[] = [];

  constructor() { 
    for(let i = 0 ; i < AccessRightsRolls.accessRightsStr.length ; ++i) {
      console.log(accessRights[AccessRightsRolls.accessRightsStr[i]]);
      //this.roles[accessRights[Privilege.accessRightsStr[i]]] = true;
      console.log(this.roles[accessRights[AccessRightsRolls.accessRightsStr[i]]]);
    }
  }

  fillRoles(privilege: Privilege[]) {
    for(let i = 0 ; i < privilege.length ; ++i) {

      for(let j = 0; j < AccessRightsRolls.accessRightsStr.length ;++j) {
        if(privilege[i].name === AccessRightsRolls.accessRightsStr[j]) {
          console.log(privilege[i].name);
          this.roles[accessRights[AccessRightsRolls.accessRightsStr[j]]];
          break;
        }
      }
    }
  }
}
