const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

const privateKey = 'a62a36fdeebbe9befdbeb3111d526c9aa2fbb048e1601330e71b65659d3a31b8';

const key = ec.keyFromPrivate(privateKey);

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
