const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

// TODO: fill in your hex private key
const privateKey = "";

const key = ec.keyFromPrivate(privateKey);

// TODO: change this message to whatever you would like to sign
const message = "I am in the ChainShot Bootcamp";

const msgHash = SHA256(message);

const signature = key.sign(msgHash.toString());

console.log({
  message,
  signature: {
    r: signature.r.toString(16),
    s: signature.s.toString(16)
  }
});
