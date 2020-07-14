const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

const publicKey = {
  x: '833ef084ef9ebd54ee0846da02abda5075f048ad7c5b078380f0937944e462d8',
  y: '555dcd284db4f67e2a61441a74063910452c03eacaddac9a81ff8bd171948be9'
}

const key = ec.keyFromPublic(publicKey, 'hex');

const msg = "I am in the ChainShot Bootcamp";
const msgHash = SHA256(msg).toString();
const signature = {
  r: '8dc5b6cc4d02c7d01fcf39020f08f920b5a302180f7bb62f40d937b937b99a95',
  s: 'fa9b4009ab83fa091155505c9d08a14ac56259f02229b7672a3678a762e3c091'
};

console.log(key.verify(msgHash, signature));
