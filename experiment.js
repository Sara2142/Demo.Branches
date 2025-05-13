import * as tilde from "./tilde.js";
import * as maja from "./maja.js";
import * as josefin from "./josefin.js";
import * as sara from "./sara.js";


function handler (){
    const prompt = prompt(text)
    
    if (text === "tilde") {
        tilde.hello();
    }
    
    if (text === "maja") {
        maja.hello();
    }
    
    if (text === "josefin") {
        josefin.hello();
    }
    
    if (text === "sara") {
        sara.Hi();
    }
    
    if (text === "tilde food") {
        tilde.food();
    }
    
    if (text === "maja food") {
        maja.food();
    }
    
    if (text === "josefin food") {
        josefin.food();
    }
    
    if (text === "sara food") {
        sara.food();
    } 
    

}
Deno.serve(handler)
