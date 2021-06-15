{
  class User {
    private _fullName: string;

    private _age: number;

    get fullName(): string {
      return this._fullName;
    }

    constructor(private _firstName: string, private _lastName: string) {
      this.createFullName();
    }

    set firstName(_firstName: string) {
      this._firstName = _firstName;
      this.createFullName();
    }

    set lastName(_lastName: string) {
      this._lastName = _lastName;
      this.createFullName();
    }

    private createFullName() {
      this._fullName = `${this._firstName} ${this._lastName}`;
    }
  }

  const user = new User("A", "BC");

  //Log:: A BC
  console.log(user.fullName);

  user.firstName = "test";

  //Log:: test BC
  console.log(user.fullName);
}
