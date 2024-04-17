import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';


export default class GameSavingLoader {
        static async load() {
          const data = await read();
          const jsonData = await json(data);
          return new GameSaving(JSON.parse(jsonData));
        } 

}


