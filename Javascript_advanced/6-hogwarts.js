class StudentHogwarts {
  #privateScore = 0;
  #name = null;

  constructor () {
    this.#privateScore = 0;
    this.#name = null;
  }

  setName (newName) {
    this.#name = newName;
  }

  rewardStudent () {
    this.#privateScore += 1;
  }

  penalizeStudent () {
    this.#privateScore -= 1;
  }

  getScore () {
    return this.#privateScore;
  }

  getStudentName () {
    return this.#name;
  }
}

// Create an instance for Harry
const harry = new StudentHogwarts();
harry.setName('Harry');

// Reward Harry four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log Harry's name and score
console.log(`${harry.getStudentName()}: ${harry.getScore()}`);

// Create an instance for Draco
const draco = new StudentHogwarts();
draco.setName('Draco');

// Reward Draco one time and penalize three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log Draco's name and score
console.log(`${draco.getStudentName()}: ${draco.getScore()}`);
