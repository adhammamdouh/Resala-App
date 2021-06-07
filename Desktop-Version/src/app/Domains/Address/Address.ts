import Capital from "./Capital";

export default interface Address{
    id:Number;
    capital:Capital;
    additionalInfo:String;
    apartmentNumber:String;
    buildingNumber:String;
    streetName:String;
    regionName:String;
}