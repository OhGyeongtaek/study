{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    //static을 사용한 이유는 CoffeeMachine가 선언될때마다
    //메모리에 BEANS_GRAMM_PER_SHOT가 추가됨
    private static BEANS_GRAMM_PER_SHOT: number = 7;

    private coffeeBeans = 0;

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피가 없어요!");
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피는 1보다 이상 넣어주세요");
      }

      this.coffeeBeans += beans;
    }
  }

  const machine = new CoffeeMachine();

  console.log(machine.makeCoffee(5));
}
