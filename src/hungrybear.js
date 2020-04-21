export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 30;
    this.moodLevel = 0;
  }

// Decrementing Methods for Stats // 

  setHunger() {
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel--;
      }
    }, 1000);
  }
  
  feed() {
    return this.foodLevel += 10;
  }
  
  gettingTired() {
    setInterval(() => {
      this.sleepLevel--;
    }, 30000);
  }
  
  isBearRested() {
    if (this.sleepLevel === 0) {
      this.gettingAngry();
      if (this.moodLevel >= 20) {
        return "you die"
      }
    }
    // if (this.sleepLevel === 0 ) {
    //   this.moodLevel ++
    // };
  }
  
  gettingAngry() {
    setInterval(() => {
      this.moodLevel++;
    }, 1000);
  }
  love() {
    return this.moodLevel = 0;
  }
  // Static Methods //
  didYouGetEaten() {
    if (this.foodLevel >0) {
      return false;
    } else  if (this.foodLevel <= 0){
      return true;
    }
    if (this.moodLevel < 20) {
      return false;
    } else if (this.moodlevel >= 20){
      return true;
    }
  }
}

// Sleep <= 0 = dead (20 secs)
        // >= 20 = hibernating
// Mood  >= 20 didYouGetEaten()= true 
// Food <0 get eaten