let data;
data = 20;

data = "hello";

data = null;

typeof data;

data = [0];

typeof data;

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
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
    if (Array.isArray(data)) {
      console.log("This is an array");
    } else if (data == null) {
      console.log("this is Null!");
    } else {
      console.log("object!");
      break;
    }
  // case "array":
  //   console.log("array!");
  //   break;
  case "string":
    console.log("string!");
    break;
  default:
    console.log("I have no idea!");
}

typeof data;
