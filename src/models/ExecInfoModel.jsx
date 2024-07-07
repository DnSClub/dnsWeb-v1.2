export class ExecInfoModel {
  position;
  name;
  linkedIn;
  email;
  description;
  personalWebsite;
  imagePath;

  constructor(
    _position,
    _name,
    _linkedIn,
    _email,
    _description,
    _personalWebsite,
    _imagePath
  ) {
    this.position = _position;
    this.name = _name;
    this.linkedIn = _linkedIn;
    this.email = _email;
    this.description = _description;
    this.personalWebsite = _personalWebsite;
    this.imagePath = _imagePath;
  }
}
