import {Injectable} from '@angular/core';
import {Events} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import _ from 'lodash';

//import { SqlStorage } from './sql-storage.service';

@Injectable()
export class UserSettings {


  constructor(private storage: Storage, private events: Events) {
  }

  favoriteTeam(team, tournamentId, tournamentName) {
    let item = {team: team, tournamentId: tournamentId, tournamentName: tournamentName};

    return new Promise(resolve => {
      this.storage.set(team.id.toString(), JSON.stringify(item)).then(() => {
        this.events.publish('favorites:changed');
        resolve();
      });
    });
  }

  unfavoriteTeam(team) {
    return new Promise(resolve => {
      this.storage.remove(team.id.toString()).then(() => {
        this.events.publish('favorites:changed');
        resolve();
      });
    });
  }

  isFavoriteTeam(teamId) {
    return this.storage.get(teamId).then(value => value ? true : false);
  }

  getAllFavorites() : Promise<any[]> {
    return new Promise(resolve => {
      let results = [];
      this.storage.forEach(data => {
        console.log('***inside foreach', data);
        results.push(JSON.parse(data));
      });
      return resolve(results);
    });

  }

}
