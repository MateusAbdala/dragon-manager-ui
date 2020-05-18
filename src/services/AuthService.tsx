class AuthService {

  AuthUser(user: string, password: string) {
    return (user.length > 5 && password.length > 5);
  }

}

const instance = new AuthService();

export { instance as AuthService };
