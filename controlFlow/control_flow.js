let userRole = "admin";
let accessLevel;

if (userRole=="admin") {
    accessLevel = "Full access granted";
} else if (userRole == "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);
let isLoggedin = true;
let userMessage;

if (isLoggedin){
    if (userRole = "admin"){
        userMessage = "Welcome Admin!";
    } else {
        userMessage = "Welcome User!";
    }
} else {
    userMessage = "Please login to access the system";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authenticationStatus);