class Exercise {
    constructor(
        id,
        categoryIds,
        name,
        equipment,
        difficulty,
        instruction,
        setsAmount,
        repsAmount,
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.name = name;
        this.equipment = equipment;
        this.difficulty = difficulty;
        this.instruction = instruction;
        this.setsAmount = setsAmount;
        this.repsAmount = repsAmount;
    }
}

export default Exercise;