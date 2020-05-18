import { action, observable, computed } from 'mobx';
import { AuthService } from '../services/AuthService';
import { RootStore } from '.';

export class AuthStore {

  @observable public logged: any;

  @observable public user: any;
  @observable public password: any;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.logged = localStorage.getItem('isLogged');
  }

  @computed
  get isLogged() {
    return !!(this.logged);
  }

  @action
  login() {
    if (AuthService.AuthUser(this.user, this.password)) {
      this.logged = true;
      localStorage.setItem('isLogged', 'true');
      return true;
    } else {
      return false;
    }
  }

  @action
  logout() {
    this.logged = false;
  }

  setUser(value: any) {
    this.user = value;
  }

  setPassword(value: any) {
    this.password = value;
  }
}
