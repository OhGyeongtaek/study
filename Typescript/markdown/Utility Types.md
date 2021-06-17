# Utility Types

## IndexType
```typescript
    type Children = {
        name: string;
        age: number;
        gender: 'm' | 'w';
    };
    // Children 타입의 gender의 유니온 타입인 'm' | 'w'가 Gender타입이 된다.
    type Gender = Children['gender'];

    // Children 타입의 키값인 'name' | 'age' | 'gender'들이 유니온 타입으로  ChildrenKeys타입이 된다.
    type ChildrenKeys = keyof Children;

    type
```

## Mapped Type
기존에 있는 타입들을 조금 다르게 변환하는 타입
```typescript
    type Video = {
        title: string;
        author: string;
    }

    //type 안에서 []를 썼을때는 for in처럼 루프를 돌게됨.
    //제네릭을 통해 타입을 받아온 뒤
    type Optional<T> = {
        //해당 타입과 키값을 받아와서 반복을 하게됨
        [P in keyof T]?: T[P]
    }

    // type VideoOptional = {
    //     title?: string;
    //     author?: string;
    // }

    //위의 코드와 같은 기능
    //재사용성이 좋음
    type VideoOptional = Optional<Video>;
```