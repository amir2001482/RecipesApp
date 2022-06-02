
export class UserModel{

  constructor(
       public email : string ,
       public userId : string ,
       private _token : string ,
       private _expireDate : Date){}

  get token(){

    if(! this._token || new Date() > this._expireDate){
      return null;
    }
    return this._token;
  }
  

}
