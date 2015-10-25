function createSecretHolder(secret) {
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(i) {
            secret = i;
        }
    };
}

var obj = createSecretHolder(5);

console.log( obj.getSecret() ); // returns 5

obj.setSecret(2);
console.log( obj.getSecret() ); // returns 2