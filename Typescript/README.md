
> # Typescript
  드림코딩 Typescript강의에서 배운 내용들을 업로드하는 폴더
  
> ## 목표
1. 강의에 포함된 motion 프로젝트를 구현한다.
2. react강의에서 했던 프로젝트에 typescript를 적용한다.
3. ZandiTodoList 프로젝트에 typescript를 적용하여 구현한다.

> ## ts-node

### 사용목적
Typescript를 배우면서 간단하게 터미널에서 파일을 실행하고 싶은데
tsc로 할때마다 컴파일을 하는게 번거롭기 때문에 사용
```
$ tsc index.ts -w 
```
위의 커맨드를 사용해도 되지만 파일이 2개가 생기기 때문에 사용.

### 설치방법
```
$ npm install -g ts-node
```

### 사용방법
```
$ ts-node index.ts
```