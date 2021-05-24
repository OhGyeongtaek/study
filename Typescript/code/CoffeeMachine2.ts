{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    //static을 사용한 이유는 CoffeeMachine가 선언될때마다
    //메모리에 BEANS_GRAMM_PER_SHOT가 추가됨
    static BEANS_GRAMM_PER_SHOT: number = 7;

    coffeeBeans = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    public makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피가 없어요!");
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const machine = new CoffeeMachine(10);

  console.log(machine.makeCoffee(5));
}
