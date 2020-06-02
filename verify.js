const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

const publicKey = {
  x: '7a37a85866eaa585f0ce0b5d4e3a6104871e91f62c61a5820383e59aa64063d',
  y: 'cdbf6b76837edcefa6ca248e06ecb5b4d7de2d3078b52c36e5fc43082cda8530'
}

const key = ec.keyFromPublic(publicKey, 'hex');

const msgHash = "7fe4cd31aa57248eda0384fcc7d007fc042bd4927a1d6c50e6d03cccbec8d394";
const signature = {
  r: 'f7d2f1688b2027ac56b57d829db3cbe5418f27ffb527dde16b64949e8f0c9489',
  s: '84a9b3b98450a05bef022f21ca53ea6ec7dc1dd3dfa8358c4647262ab96afa32'
};

console.log(key.verify(msgHash, signature));
