import create from "keccak";

const keccak = create("keccak224"); // $ExpectType Keccak
keccak.update("alice").digest(); // $ExpectType Buffer || Buffer<ArrayBufferLike>
keccak.update("alice").digest("hex"); // $ExpectType string

const sha3 = create("sha3-224"); // $ExpectType Keccak
sha3.update("alice").digest(); // $ExpectType Buffer || Buffer<ArrayBufferLike>
sha3.update("alice").digest("utf-8"); // $ExpectType string

const shake = create("shake128"); // $ExpectType Shake
shake.update("alice").squeeze(42); // $ExpectType Buffer || Buffer<ArrayBufferLike>
shake.update("alice").squeeze(42, "ascii"); // $ExpectType string
