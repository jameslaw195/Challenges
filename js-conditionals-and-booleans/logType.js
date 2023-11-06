let data;
data = 20;

data = "hello";

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "null":
    console.log("null!");
    break;
  case "number":
    console.log("number!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    console.log("object!");
    break;
  case "array":
    console.log("array!");
    break;
  case "string":
    console.log("string!");
    break;
  default:
    console.log("I have no idea!");
}
