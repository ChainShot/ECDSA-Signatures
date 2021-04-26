## Installation

Install all dependencies using `npm i` or `yarn install`.

## Scripts

This repository has three scripts:

- `node generate` Generates a private and public key, exports them in hex (with both the X and Y coordinates of the public key)
- `node sign` Signs a message with a private key
- `node verify` Verifies a message given a public key was signed with the corresponding private key

## Setting Up

To setup, first generate yourself a public key and a private key by running `node generate`. Keep your private key to yourself and provide your public key to anyone who would like to verify your signatures.

## Signing Messages

In the `sign.js` file, fill in your private key and the message you would like to sign. Run this script using `node sign` to get the `r` and `s` components of your signature.

## Decrypting Messages

In the `verify.js`, fill in the public key X and Y coordinates corresponding to the person who signed the original message. Change the message variable to be the same message they initially signed. Finally, fill in the `r` and `s` components of their signature. Run `node verify` to determine if they actually signed this message.
