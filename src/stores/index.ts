import { AuthStore } from './AuthStore';
import { DragonsStore } from './DragonsStore';

export interface IRootStore {
  rootStore?: RootStore;
}

export class RootStore {
  authStore: AuthStore;
  dragonsStore: DragonsStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.dragonsStore = new DragonsStore(this);
  }
}

const rootStore = new RootStore();

export { rootStore };
