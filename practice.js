const monMenu = {
    breakfast: {
      morDrinks: "Coffie",
      eatery: "scrambled eggs",
      toasts: "Nan watani",
    },
    lunch: {
      lunDrinks: "Water and Soda",
      meal: "Chopan kabob",
      sides: "Rice and salad",
      bread: "Nan watani",
    },
    dinner: {
      eveDrinks: "Green tea",
      mealLight: "chicken salad",
      fruits: "apple",
    },
    desserts: "Muphins with green tea",
  };
  console.log(monMenu.desserts);
  
  function destructivelyUpdateObject(obj, key, value) {
    obj[key] = value;
  
    return obj;
  };
  const tuesMenu = destructivelyUpdateObject(monMenu, "desserts", "gor and chai");
    console.log(tuesMenu);
  console.log(monMenu.desserts);
  
  function nonDestructivelyUpdateObject(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
  
    return newObj;
  };
  const wedMenu = nonDestructivelyUpdateObject(tuesMenu, "desserts", "some home made cake");
  console.log(wedMenu.desserts);
  delete monMenu.desserts;
  console.log(monMenu);
  
  const newArr = [];
  newArr["Menu"] = "This is our basic Menu";
  newArr.push(1, 2, 3, 4, 5);
  console.log(newArr);
  console.log(newArr.length);
  