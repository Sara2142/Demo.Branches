import * as tilde from "./tilde.js";
import * as maja from "./maja.js";
import * as josefin from "./josefin.js";
import * as sara from "./sara.js";


const prompt = prompt(text)
if (text === "tilde") {
    tilde.hello();
} else if (text === "maja") {
    maja.hello();
} else if (text === "josefin") {
    josefin.hello();
} else if (text === "sara") {
    sara.hi();
} else {
    console.log("Unknown name");
}