import { HungryBear } from "./../src/hungrybear.js";

describe("Fuzzy", () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function () {
    fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
    fuzzy.gettingTired();
    fuzzy.gettingAngry();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  test("should have a name and a food level of 10 when it is created", () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });
  
  test("should have a food level of 7 after 3001 milliseconds", () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });
  
  test("should get eaten if the food level is 0 or less or mood level rises aboce 20", function () {
    fuzzy.moodLevel = 0;
    fuzzy.foodLevel = 10;
    expect(fuzzy.didYouGetEaten()).toEqual(false);
  });

  test("should get very hungry if 10 seconds pass without feeding", function () {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test ("should test moodlevel has caused us to be eaten by the beear.", () => {
    jest.advanceTimersByTime(20001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test("should have a food level of ten if it is fed", function () {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test ("should test that the bear is getting tired over time", () => {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.sleepLevel).toEqual(30);
  });

  test ("should test that the bear is getting angry over time", () => {
    jest.advanceTimersByTime(20001);
    expect(fuzzy.moodLevel).toEqual(20);
  });

  test("If bear doens't sleep increase mood", () => {
    jest.advanceTimersByTime(20001);
    fuzzy.sleepLevel = 0;
    expect(fuzzy.isBearRested()).toEqual("you die");
  });
});
