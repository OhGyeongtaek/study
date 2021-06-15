# Generic

## Generic을 사용하는 이유

함수나 클레스를 정의할 때 조금 더 유연하게 정의하기 위해 사용

## 함수에서의 예제

```typescript 
    function checkNotNull(arg: number | null): number {
        if (arg === null) {
            throw new Error("Is Null!");
        }

        return arg;
    }
```

위의 방식대로 선언할 경우 arg가 number일 경우에만 사용할 수 있음.

```typescript 
    function checkNotNull(arg: any): any {
        if (arg === null) {
            throw new Error("Is Null!");
        }

        return arg;
    }
```

위의 방식대로 선언할 경우 타입이 보장되지 않음.

```typescript 
    function checkNotNull<T>(arg: T | null): T {
        if (arg === null) {
            throw new Error("Is Null!");
        }

        return arg;
    }
```

해당 방식대로 선언을 할 경우 타입이 보장이 되어지며 타입을 사용하는 사람이 정의할 수 있음