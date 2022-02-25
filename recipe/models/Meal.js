class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imgUrl,
    duration,
    ingrediants,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactosesFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imgUrl = imgUrl;
    this.duration = duration;
    this.ingrediants = ingrediants;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactosesFree = isLactosesFree;
  }
}

export default Meal;
