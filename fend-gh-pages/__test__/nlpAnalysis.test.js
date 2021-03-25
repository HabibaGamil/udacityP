import "@babel/polyfill";

const { nlpAnalysis } = require('../src/client/formFiller');


it('returns the title of the first album', async () => {
  
  const myEvent=new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  expect(nlpAnalysis(myEvent)).toBeDefined();
});