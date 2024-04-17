export default class GameSaving {
  constructor(object) {
    this.id = object.id;
    this.created = object.created;
    this.userInfo = {
      id: object.userInfo.id,
      name: object.userInfo.name,
      level: object.userInfo.level,
      points: object.userInfo.points,
    };
  }
}

/* Спецификации объекта типа GameSaving:
{
  "id": <number>, // id сохранения
  "created": <timestamp>, // timestamp создания
  "userInfo": {
    "id": <number>, // user id
    "name": <string>, // user name
    "level": <number>, // user level
    "points": <number> // user points
  }
} */
