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

export enum accessRights {
    
}

export interface textValue {
    text: string,
    value: any
}


export class options {
    public static answers: textValue[] = [{text: 'ANSWERS.yes', value: answers.yes},
                                          {text: 'ANSWERS.no', value: answers.no}];

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
    constructor() {}

}