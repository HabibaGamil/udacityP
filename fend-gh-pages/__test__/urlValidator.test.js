import "@babel/polyfill";
import {urlValidator} from "../src/client/urlValidator"


test('testing validator returns true with valid url', () => {
    expect(urlValidator('https://jestjs.io/')).toBe(true);
  });

test('testing validator returns false with invalid url', () => {
    expect(urlValidator('jestjs')).toBe(false);
  });