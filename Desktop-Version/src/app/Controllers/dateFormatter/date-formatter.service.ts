export class DateFormatter {

  constructor() { }

  formatDateTimeFromBackEnd(date){
    return date.slice(0,10) + "T" + date.slice(11,17)+":00.000";
  }

  formatTimeToBackEnd(date){
    return date.slice(0,10) + " " + date.slice(11,17);
  }
  

}
