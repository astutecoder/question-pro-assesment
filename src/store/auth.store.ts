import { makeAutoObservable } from 'mobx';

class AuthStore {
  name: string = 'Sk. Azadur Rahman';
  email: string = 'sk.azadrahman@gmail.com';

  constructor() {
    makeAutoObservable(this);

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateName(value: string) {
    this.name = value;
  }
  updateEmail(value: string) {
    this.email = value;
  }
}

export const authStore = new AuthStore();
