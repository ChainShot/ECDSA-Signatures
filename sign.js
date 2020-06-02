const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

const privateKey = '393f2aa9eb8099bc63924d36b3435f0b1098c69a7c3106525102ce0b98fea723';

const key = ec.keyFromPrivate(privateKey);

const message = "I am in the ChainShot Bootcamp";

const msgHash = SHA256(message);

const signature = key.sign(msgHash.toString());

console.log({
  msgHash: msgHash.toString(),
  signature: {
    r: signature.r.toString(16),
    s: signature.s.toString(16)
  }
});
