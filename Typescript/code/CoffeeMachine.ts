type Coffee = "Coffee";

class CoffeeMachine {
  private makeShot(): Coffee {
    return "Coffee";
  }

  static exportCoffee(shot: number): Coffee[] {
    const machine = new CoffeeMachine();
    const cup: Coffee[] = [];

    for (let i = 0; i < shot; i++) {
      cup.push(machine.makeShot());
    }

    return cup;
  }
}

const shot = CoffeeMachine.exportCoffee(3);

console.log(shot);
