import { thing } from "./index";

it("should work", () => {
  const output = thing("testing");
  expect(output).toEqual("testing test");
});
