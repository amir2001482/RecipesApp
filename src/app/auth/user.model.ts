
export class UserModel{

  constructor(
       public email : string ,
       public userId : string ,
       private _token : string | number | boolean ,
       private _expireDate : Date){}

  get token(){
    if(this._expireDate != null)
    if(! this._token || new Date() > this._expireDate){
      return null;
    }
    return this._token;
  }


}
