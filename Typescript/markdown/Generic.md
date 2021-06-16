# Generic

## Generic을 사용하는 이유

함수나 클레스를 정의할 때 조금 더 유연하게 정의하기 위해 사용

## 예제

```typescript 
    function checkNotNull(arg: number | null): number {
        if (arg === null) {
            throw new Error("Is Null!");
        }

        return arg;
    }
```

위의 방식대로 선언할 경우 arg가 number일 경우에만 사용할 수 있다.

```typescript 
    function checkNotNull(arg: any): any {
        if (arg === null) {
            throw new Error("Is Null!");
        }

        return arg;
    }
```

위의 방식대로 선언할 경우 타입이 보장되지 않는다.

```typescript 
    function checkNotNull<T>(arg: T | null): T {
        if (arg === null) {
            throw new Error("Is Null!");
        }

        return arg;
    }
```

해당 방식대로 선언을 할 경우 타입이 보장이 되어지며 타입을 사용하는 사람이 정의할 수 있다.

## 제네릭에 조건걸기

```typescript
    function getObjectKeyValue<T, K extends keyof T>(obj: T, key: K): T[K]{
        return obj[key];
    }

    const child = {
        name: "오경택",
        age: 25
    }

    getObjectKeyValue(child, 'name'); //오경택
    getObjectKeyValue(child, 'age'); //25
```

위의 방식대로 함수를 구현할 경우 2번째 인자값에는 1번째 인자값의 key값인
name, age만 받을 수 있다.