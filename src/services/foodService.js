const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class foodService {
  static async newFood(
    food,
    caloricValue,
    fat,
    saturatedFats,
    monounsaturatedFats,
    polyunsaturatedFats,
    carbohydrates,
    sugars,
    protein,
    dietaryFiber,
    cholesterol,
    sodium, 
    water,
    vitaminA,
    vitaminB1,
    vitaminB11,
    vitaminB12,
    vitaminB2,
    vitaminB3,
    vitaminB5,
    vitaminB6,
    vitaminC,
    vitaminD,
    vitaminE,
    vitaminK,
    calcium,
    copper,
    iron,
    magnesium,
    manganese,
    phosphorus,
    potassium,
    selenium,
    zinc,
    nutritionDensity
  ) {
    return await prisma.food.create({
      data: {
        food: food,
        caloricValue: caloricValue,
        fat: fat,
        saturatedFats: saturatedFats,
        monounsaturatedFats: monounsaturatedFats,
        polyunsaturatedFats: polyunsaturatedFats,
        carbohydrates: carbohydrates,
        sugars: sugars,
        protein: protein,
        dietaryFiber: dietaryFiber,
        cholesterol: cholesterol,
        sodium: sodium,
        water: water,
        vitaminA: vitaminA,
        vitaminB1: vitaminB1,
        vitaminB11: vitaminB11,
        vitaminB12: vitaminB12,
        vitaminB2: vitaminB2,
        vitaminB3: vitaminB3,
        vitaminB5: vitaminB5,
        vitaminB6: vitaminB6,
        vitaminC: vitaminC,
        vitaminD: vitaminD,
        vitaminE: vitaminE,
        vitaminK: vitaminK,
        calcium: calcium,
        copper: copper,
        iron: iron,
        magnesium: magnesium,
        manganese: manganese,
        phosphorus: phosphorus,
        potassium: potassium,
        selenium: selenium,
        zinc: zinc,
        nutritionDensity: nutritionDensity
      },
    });
  }

  static async getAllFoods() {
    const foods = await prisma.food.findMany();
    return foods;
  }

  static async updateFood(
    id, 
    newFood, 
    newCaloricValue, 
    newFat, 
    newSaturatedFats, 
    newMonounsaturatedFats, 
    newPolyunsaturatedFats, 
    newCarbohydrates, 
    newSugars, 
    newProtein, 
    newDietaryFiber, 
    newCholesterol, 
    newSodium, 
    newWater, 
    newVitaminA, 
    newVitaminB1, 
    newVitaminB11, 
    newVitaminB12, 
    newVitaminB2, 
    newVitaminB3, 
    newVitaminB5, 
    newVitaminB6, 
    newVitaminC, 
    newVitaminD, 
    newVitaminE,
    newVitaminK, 
    newCalcium, 
    newCopper, 
    newIron, 
    newMagnesium, 
    newManganese, 
    newPhosphorus, 
    newPotassium, 
    newSelenium, 
    newZinc, 
    newNutritionDensity
  ) {
    return await prisma.food.update({
      where: {
        id: Number(id),
      },
      data: {
        food: newFood,
        caloricValue: newCaloricValue,
        fat: newFat,
        saturatedFats: newSaturatedFats,
        monounsaturatedFats: newMonounsaturatedFats,
        polyunsaturatedFats: newPolyunsaturatedFats,
        carbohydrates: newCarbohydrates,
        sugars: newSugars,
        protein: newProtein,
        dietaryFiber: newDietaryFiber,
        cholesterol: newCholesterol,
        sodium: newSodium,
        water: newWater,
        vitaminA: newVitaminA,
        vitaminB1: newVitaminB1,
        vitaminB11: newVitaminB11,
        vitaminB12: newVitaminB12,
        vitaminB2: newVitaminB2,
        vitaminB3: newVitaminB3,
        vitaminB5: newVitaminB5,
        vitaminB6: newVitaminB6,
        vitaminC: newVitaminC,
        vitaminD: newVitaminD,
        vitaminE: newVitaminE,
        vitaminK: newVitaminK,
        calcium: newCalcium,
        copper: newCopper,
        iron: newIron,
        magnesium: newMagnesium,
        manganese: newManganese,
        phosphorus: newPhosphorus,
        potassium: newPotassium,
        selenium: newSelenium,
        zinc: newZinc,
        nutritionDensity: newNutritionDensity,
      },
    });
  }

  static async deleteFood(id) {
    return await prisma.food.delete({
      where: { id: Number(id) },
    });
  }
}

module.exports = foodService;
