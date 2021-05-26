{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("커피가 없어요!");
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 10 * BEANS_GRAMM_PER_SHOT;

  console.log(makeCoffee(5));
  console.log(makeCoffee(5));
}
