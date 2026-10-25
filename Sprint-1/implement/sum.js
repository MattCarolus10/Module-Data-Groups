function sum(elements) {
  if (!Array.isArray(list)) {
    throw new Error("sum requires an array of numbers");
  }
  if (!list.every((item) => typeof item === "number")) {
    throw new Error("sum requires an array of numbers");
  }
}

module.exports = sum;
