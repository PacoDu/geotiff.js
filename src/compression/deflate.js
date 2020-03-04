import pako from 'pako';
import BaseDecoder from './basedecoder.js';


export default class DeflateDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    return pako.inflate(new Uint8Array(buffer)).buffer;
  }
}
