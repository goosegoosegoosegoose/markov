const { MarkovMachine } = require("./markov");

describe("MarkovMachine", () => {
    let mm = new MarkovMachine("the cat in the hat is in the hat");

    test("test makeChains() array", () => {
        let test_chains = {"cat": ["in"], "hat": ["is", null], "in": ["the", "the"], "is": ["in"], "the": ["cat", "hat", "hat"]};
        let chains = mm.makeChains();

        expect(chains).toEqual(expect.objectContaining(test_chains));
    });

    test("test makeText() output string", () => {
        let sentence = mm.makeText();
        expect(sentence).toEqual(expect.any(String));
    });
});
