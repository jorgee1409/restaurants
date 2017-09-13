export class User {
  email: string;
  password: string;

  constructor(){
    this.email = "";
    this.password = "";
  }

  getEmail(){
    return this.email;
  }
  getPassword(){
    return this.password;
  }
  setEmail(email:string){
    this.email = email;
  }
  setPassword(password: string){
    this.password = password;
  }
}
