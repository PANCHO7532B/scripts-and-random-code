const sreq = require("sync-request");
console.log("Free GBs Personal Argentina\r\nCopyright (c) PANCHO7532 - 2021");
if(!process.argv[2] || !process.argv[3]) {
    console.log("[ERROR] Missing user and password");
    process.exit(0);
}
let username = process.argv[2];
let password = process.argv[3];
console.log("[INFO] Authenticating...");
let authorization = sreq("POST", `https://sesion.personal.com.ar/openam/oauth2/realms/root/realms/tabpinsextm/access_token?scope=openid%20profile&password=${password}&username=${username}&grant_type=password`, {
    "headers": {
        "Authorization": "Basic U25ZeVVwVDRoZDF3MUMwM0Q5VDZQMDhtejZRY3ZQWERxVE9ocEFvOUZyb1VoTHhMVXZTYU1XSDVUbWttQTI1OEZNTXBzb1lPdHJHOg==",
        "User-Agent": "okhttp/4.9.0",
        "Content-Type": "application/x-www-form-urlencoded"
    }
});
let {id_token} = JSON.parse(authorization.body.toString());
console.log("[INFO] Retrieving info...");
let information = sreq("GET", `https://agestion.telecom.com.ar/autogestion-authentication/v5/authentication/postlogin/${username}`, {
    "headers": {
        "Authorization": `Bearer ${id_token}`,
        "User-Agent": "okhttp/4.9.0",
        "X-Source-Name": "ANDROID",
        "X-Source-Version": "9.1.8"
    }
});
//console.log(information.body.toString());
let {name, surname, line_number, document, email, address} = JSON.parse(information.body.toString())["data"]["customer"];
console.log("Account information:");
console.log("[>] Name: " + name);
console.log("[>] Surname: " + surname);
console.log("[>] Phone Number: " + line_number);
console.log("[>] ID Number: " + document);
console.log("[>] Email: " + email);
console.log("[>] Address: " + address);
console.log("[INFO] Attempting to activate product...");
let processxd = sreq("POST", `https://agestion.telecom.com.ar/autogestion-extra/v3/payments/${username}/extras/10000857-FAN_PRDA_00301?type=giga_benefits`, {
    "headers": {
        "User-Agent": "okhttp/4.9.0",
        "X-Source-Name": "ANDROID",
        "X-Source-Version": "9.1.8",
        "Authorization": `Bearer ${id_token}`,
        "X-Global-Transaction-ID": `${Math.round(Math.random()*10000000000000000000)}-${username}`
    }
});
let jsonparse = JSON.parse(processxd.body.toString());
if(!!jsonparse["error"]) {
    console.log(`[ERROR-${jsonparse["error"]["code"]}] ${jsonparse["error"]["message"]}`);
} else if(!!jsonparse["data"]) {
    console.log(`[INFO] Query successful, code: ${jsonparse["data"]["code"]}`);
}
process.exit(0);