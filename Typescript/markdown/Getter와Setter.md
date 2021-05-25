> # Getter, Setter를 배우며.

## set

---

아래와 같이 변수값을 변경하면 다른 변수가 계산이 되어야할 경우 계산이 가능하다.

```Typescript
    set firstName(_firstName: string) {
      this._firstName = _firstName;
      this.createFullName();
    }

    private createFullName() {
      this._fullName = `${this._firstName} ${this._lastName}`;
    }
```

## 추가로 알게된 사실

---

> ### constructor에 전역변수 선언

아래 코드와 같이 constructor에서 인자값을 받을때 전역으로 선언이 가능하다.

```Typescript
    constructor(private _firstName: string, private _lastName: string) {
      this.createFullName();
    }
```
