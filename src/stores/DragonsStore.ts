import { action } from 'mobx';
import { RootStore } from '.';
import { IDragon, DragonService } from '../services/DragonService';

export class DragonsStore {

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  getDragons = () => {
    return DragonService.getDragons();
  };

  @action
  getDragon = (id: string) => {
    return DragonService.getDragonById(id);
  };

  @action
  createDragon = (dragon: IDragon) => {
    return DragonService.createDragon(dragon);
  };

  @action
  mutateDragon = (dragon: IDragon) => {
    return DragonService.updateDragon(dragon);
  };

  @action
  killDragon = (id: string) => {
    return DragonService.deleteDragonById(id);
  };

}
