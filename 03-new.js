    function TataCar(chessNumber, modelName) {
        // console.log(this)
        this.chessNumber = chessNumber;
        this.modelName = modelName;
        this.fuelLevel = 100; 
        // console.log(this)
    }

    TataCar.prototype.status = function () {
        return `Tata ${this.modelName} #${this.chessNumber}| fuel: ${this.fuelLevel}`
    }

    const car1 = new TataCar("MH-101", "Nexon");
    const car2 =  TataCar("MH-107", "Punch");

    console.log(car1.modelName)
    console.log(car1.status())

    // console.log(car1.status === car2.status)

    // this is not same for above

    function createAutoRickshaw(id, route) {
    return {
        id,
        route,
        run() {
        return `Auto ${this.id} running on ${this.route}`;
        },
    };
    }

    const auto1 = createAutoRickshaw("UP-1", "Lucknow-kanpu");
    const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");

    // console.log(auto1.run());
    // console.log(auto2.run());

    // console.log(auto1.run() === auto2.run());