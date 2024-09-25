export class EventInfoModel {
  title;
  link;
  description;
  photoUrl;
  date;

  constructor(_title, _link, _description, _photoUrl, _date) {
    this.title = _title;
    this.link = _link;
    this.description = _description;
    this.photoUrl = _photoUrl;
    this.date = _date; 
  }
}
