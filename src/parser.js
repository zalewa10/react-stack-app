function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const dataArray = [
  [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ],
  [
    createData("Apple", 95, 0.3, 25, 0.5),
    createData("Banana", 105, 0.3, 27, 1.3),
    createData("Orange", 62, 0.2, 15, 1.2),
    createData("Grapes", 69, 0.2, 18, 0.9),
    createData("Watermelon", 30, 0.2, 8, 0.6),
  ],
  [
    createData("Carrot", 41, 0.2, 10, 0.9),
    createData("Broccoli", 55, 0.6, 11, 3.7),
    createData("Spinach", 23, 0.4, 4, 2.9),
    createData("Tomato", 22, 0.2, 5, 1.1),
    createData("Cucumber", 16, 0.1, 4, 0.7),
  ],
];

export { dataArray };
