let numOrStr = prompt("input number or string");
switch (isNaN(numOrStr) || numOrStr) {
    case null:
        console.log("ви скасували");
        break;
    case '':
        console.log("Empty String");
        break;
    case isNaN(numOrStr):
        console.log("number is Ba_NaN");
        break;
    default:
        console.log("Ok!");
        break;
}