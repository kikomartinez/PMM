function getNotBannedUsers(users, blackListed){
    return users.filter(value => !blackListed.includes(value));    
}

//TESTING
let users = ["Juan", "Pedro", "Sandra", "David", "Ana"];
let bannedUsers = ["Pedro", "Ana"];

console.log(getNotBannedUsers(users, bannedUsers));