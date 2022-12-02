export class User {
  id?: number;
  userName?: string;
  token?: string;
  email?: string;

  constructor (id: number, username: string, token: string, email: string) {
    this.id = id;
    this.userName =  username;
    this.token = token;
    this.email = email
  }

}
