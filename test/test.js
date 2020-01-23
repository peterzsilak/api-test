import { expect } from "chai"

describe("index test", () => {
    describe("sayHello function", () => {
        it("should say Hello guys!", () => {
            let str = "Hello guys!";
            expect(str).to.equal("Hello guys!");
        })
    })
});
