export class ExecInfo {
  position;
  name;
  personalWebsite;
  linkedIn;
  email;
  description;
  imagePath;

  constructor(
    _position,
    _name,
    _personalWebsite,
    _linkedIn,
    _email,
    _description,
    _imagePath
  ) {
    this.position = _position;
    this.name = _name;
    this.personalWebsite = _personalWebsite;
    this.linkedIn = _linkedIn;
    this.email = _email;
    this.description = _description;
    this.imagePath = _imagePath;
  }
}
