import * as tilde from "./tilde.js";
import * as maja from "./maja.js";
import * as josefin from "./josefin.js";
import * as sara from "./sara.js";

function handler(request) {
    const headers = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    });

    if (request.method === "OPTIONS") {
        return new Response(null, { headers });
    }

    const url = new URL(request.url);
    const text = url.searchParams.get("text");

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

    return new Response("Handled request", { headers });
}

Deno.serve(handler);