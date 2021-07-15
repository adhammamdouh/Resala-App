export enum branches {
    helwan = 1,
    maadi = 2,
    mohandsen = 3,
    fesal = 4,
    masrElGdeda = 5,
    nasrCity = 6,
    october = 7,
    alex = 8,
}

export enum answers {
    yes = 0,
    no = 1,
    ok = 2
}

export enum gender {
    male = 0,
    female = 1,
}

export enum networkType {
    etisalat = 1,
    vodafone = 2,
    orange = 3,
    we = 4
}

export enum governorates {
    cairo = 1,
    alex = 2,
    giza = 3,
    aswan = 4,
    asyut = 5,
    beheira = 6,
    ismailia = 7,
    luxor = 8,
    redSea = 9,
    beniSuef = 10,
    portSaid = 11,
    southSinai = 12,
    dakahlia = 13,
    damietta = 14,
    sohag = 15,
    suez = 16,
    sharqia = 17,
    northSinai = 18,
    gharbia = 19,
    faiyum = 20,
    qalyubia = 21,
    qena = 22,
    kafrElSheikh = 23,
    matruh = 24,
    monufia = 25,
    minya = 26,
    newValley = 27
}

export interface textValue {
    text: string,
    value: any
}


export class options {
    public static answers: textValue[] = [{text: 'ANSWERS.yes', value: true},
                                          {text: 'ANSWERS.no', value: false}];
    
    public static tShirt: textValue[] = [{text: 'TESHIRT.has', value: 0},
                                         {text: 'TESHIRT.doesnotHas', value: 1},
                                         {text: 'TESHIRT.need', value: 2}]

    public static ok: textValue[] = [{text: 'ANSWERS.ok', value: answers.ok}];

    public static gender: textValue[] = [{text: 'GENDER.male', value: gender.male},
                                         {text: 'GENDER.female', value: gender.female}];

    public static branches: textValue[] = [{text: 'BRANCHES.maadi', value: branches.maadi},
                                          {text: 'BRANCHES.helwan', value: branches.helwan},
                                          {text: 'BRANCHES.masrElGdeda', value: branches.masrElGdeda},
                                          {text: 'BRANCHES.nasrCity', value: branches.nasrCity},
                                          {text: 'BRANCHES.alex', value: branches.alex},
                                          {text: 'BRANCHES.fesal', value: branches.fesal},
                                          {text: 'BRANCHES.october', value: branches.october},
                                          {text: 'BRANCHES.mohandsen', value: branches.mohandsen}];
    
    public static governorates: textValue[] = [
                                                {text: 'GOVERNORATES.cairo', value: governorates.cairo},
                                                {text: 'GOVERNORATES.alex', value: governorates.alex},
                                                {text: 'GOVERNORATES.giza', value: governorates.giza},
                                                {text: 'GOVERNORATES.aswan', value: governorates.aswan},
                                                {text: 'GOVERNORATES.asyut', value: governorates.asyut},
                                                {text: 'GOVERNORATES.beheira', value: governorates.beheira},
                                                {text: 'GOVERNORATES.ismailia', value: governorates.ismailia},
                                                {text: 'GOVERNORATES.luxor', value: governorates.luxor},
                                                {text: 'GOVERNORATES.redSea', value: governorates.redSea},
                                                {text: 'GOVERNORATES.beniSuef', value: governorates.beniSuef},
                                                {text: 'GOVERNORATES.portSaid', value: governorates.portSaid},
                                                {text: 'GOVERNORATES.southSinai', value: governorates.southSinai},
                                                {text: 'GOVERNORATES.dakahlia', value: governorates.dakahlia},
                                                {text: 'GOVERNORATES.damietta', value: governorates.damietta},
                                                {text: 'GOVERNORATES.sohag', value: governorates.sohag},
                                                {text: 'GOVERNORATES.suez', value: governorates.suez},
                                                {text: 'GOVERNORATES.sharqia', value: governorates.sharqia},
                                                {text: 'GOVERNORATES.northSinai', value: governorates.northSinai},
                                                {text: 'GOVERNORATES.gharbia', value: governorates.gharbia},
                                                {text: 'GOVERNORATES.faiyum', value: governorates.faiyum},
                                                {text: 'GOVERNORATES.qalyubia', value: governorates.qalyubia},
                                                {text: 'GOVERNORATES.qena', value: governorates.qena},
                                                {text: 'GOVERNORATES.kafrElSheikh', value: governorates.kafrElSheikh},
                                                {text: 'GOVERNORATES.matruh', value: governorates.matruh},
                                                {text: 'GOVERNORATES.monufia', value: governorates.monufia},
                                                {text: 'GOVERNORATES.minya', value: governorates.minya},
                                                {text: 'GOVERNORATES.newValley', value: governorates.newValley},
                                              ]
}

export enum accessRights {
    ROLE_GET_ALL_VOLUNTEERS = 0,
    ROLE_GET_ALL_VOLUNTEERS_PUBLIC_INFO = 1,
    ROLE_GET_VOLUNTEERS_BY_MY_BRANCH_ID,
    ROLE_GET_VOLUNTEERS_PUBLIC_INFO_BY_MY_BRANCH,
    ROLE_CREATE_VOLUNTEER,  //
    ROLE_UPDATE_VOLUNTEER,  //
    ROLE_REQUEST_TO_ARCHIVE_VOLUNTEER,  //
    ROLE_ACCEPT_TO_ARCHIVE_VOLUNTEER,   ///
    ROLE_DECLINE_TO_ARCHIVE_VOLUNTEER,  ///

    ROLE_GET_ALL_VOLUNTEERS_BY_STATUS,
    ROLE_GET_ALL_VOLUNTEERS_PUBLIC_INFO_BY_STATUS,
    ROLE_GET_ALL_VOLUNTEERS_BY_STATUS_AND_MY_BRANCH,
    ROLE_GET_ALL_VOLUNTEERS_PUBLIC_INFO_BY_STATUS_AND_MY_BRANCH,
    ROLE_GET_ALL_LEAD_VOLUNTEERS,
    ROLE_GET_ALL_LEAD_VOLUNTEERS_PUBLIC_INFO,
    ROLE_GET_LEAD_VOLUNTEERS_BY_MY_BRANCH,
    ROLE_GET_LEAD_VOLUNTEERS_PUBLIC_INFO_BY_MY_BRANCH,
    ROLE_GET_ALL_LEAD_VOLUNTEERS_BY_STATE,
    ROLE_GET_ALL_LEAD_VOLUNTEERS_PUBLIC_INFO_BY_STATE,
    ROLE_GET_ALL_LEAD_VOLUNTEERS_BY_STATE_AND_MY_BRANCH,
    ROLE_GET_ALL_LEAD_VOLUNTEERS_PUBLIC_INFO_BY_STATE_AND_MY_BRANCH,

    ROLE_GET_ALL_EVENTS,    
    ROLE_GET_EVENTS_BY_MY_BRANCH,   
    ROLE_ADD_EVENT, //
    ROLE_ARCHIVE_EVENT, 
    ROLE_COMPLETE_EVENT,
    ROLE_UPDATE_EVENT,
    ROLE_GET_ASSIGNED_CALLS,    
    ROLE_SUBMIT_ASSIGNED_CALLS, 

    ROLE_GET_All_EVENTS_BY_STATE,
    ROLE_GET_All_SHAREABLE_EVENTS_BY_STATE,
    ROLE_GET_All_EVENTS_BY_STATE_AND_MY_BRANCH,
    ROLE_GET_All_SHAREABLE_EVENTS_BY_STATE_AND_MY_BRANCH,

    ROLE_ASSIGN_CALLS,  

    ROLE_MAKE_EVENT_ATTENDANCE_TO_VOLUNTEER,    
    ROLE_CREATE_LEAD_VOLUNTEER,     
    ROLE_GET_ALL_COMMITTEE_TEAM,    
    ROLE_GET_NETWORK_TYPE_ASSIGNED_TO_VOLUNTEERS
}

export class AccessRightsRolls {
    static accessRightsStr: string[] = [
        'ROLE_GET_ALL_VOLUNTEERS',
        'ROLE_GET_ALL_VOLUNTEERS_PUBLIC_INFO',
        'ROLE_GET_VOLUNTEERS_BY_MY_BRANCH_ID',
        'ROLE_GET_VOLUNTEERS_PUBLIC_INFO_BY_MY_BRANCH',
        'ROLE_CREATE_VOLUNTEER',
        'ROLE_UPDATE_VOLUNTEER',
        'ROLE_REQUEST_TO_ARCHIVE_VOLUNTEER',
        'ROLE_ACCEPT_TO_ARCHIVE_VOLUNTEER',
        'ROLE_DECLINE_TO_ARCHIVE_VOLUNTEER',
        'ROLE_GET_ALL_VOLUNTEERS_BY_STATUS',
        'ROLE_GET_ALL_VOLUNTEERS_PUBLIC_INFO_BY_STATUS',
        'ROLE_GET_ALL_VOLUNTEERS_BY_STATUS_AND_MY_BRANCH',
        'ROLE_GET_ALL_VOLUNTEERS_PUBLIC_INFO_BY_STATUS_AND_MY_BRANCH',
        'ROLE_GET_ALL_LEAD_VOLUNTEERS',
        'ROLE_GET_ALL_LEAD_VOLUNTEERS_PUBLIC_INFO',
        'ROLE_GET_LEAD_VOLUNTEERS_BY_MY_BRANCH',
        'ROLE_GET_LEAD_VOLUNTEERS_PUBLIC_INFO_BY_MY_BRANCH',
        'ROLE_GET_ALL_LEAD_VOLUNTEERS_BY_STATE',
        'ROLE_GET_ALL_LEAD_VOLUNTEERS_PUBLIC_INFO_BY_STATE',
        'ROLE_GET_ALL_LEAD_VOLUNTEERS_BY_STATE_AND_MY_BRANCH',
        'ROLE_GET_ALL_LEAD_VOLUNTEERS_PUBLIC_INFO_BY_STATE_AND_MY_BRANCH',
        'ROLE_GET_ALL_EVENTS',
        'ROLE_GET_EVENTS_BY_MY_BRANCH',
        'ROLE_ADD_EVENT',
        'ROLE_ARCHIVE_EVENT',
        'ROLE_COMPLETE_EVENT',
        'ROLE_UPDATE_EVENT',
        'ROLE_GET_ASSIGNED_CALLS',
        'ROLE_SUBMIT_ASSIGNED_CALLS',
        'ROLE_GET_All_EVENTS_BY_STATE',
        'ROLE_GET_All_SHAREABLE_EVENTS_BY_STATE',
        'ROLE_GET_All_EVENTS_BY_STATE_AND_MY_BRANCH',
        'ROLE_GET_All_SHAREABLE_EVENTS_BY_STATE_AND_MY_BRANCH',
        'ROLE_ASSIGN_CALLS',
        'ROLE_MAKE_EVENT_ATTENDANCE_TO_VOLUNTEER',
        'ROLE_CREATE_LEAD_VOLUNTEER',
        'ROLE_GET_ALL_COMMITTEE_TEAM',
        'ROLE_GET_NETWORK_TYPE_ASSIGNED_TO_VOLUNTEERS'
    ]
}