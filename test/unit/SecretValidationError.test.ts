import { SecretValidationError } from "../../src/SecretValidationError";

describe("SecretValidationError", () => {
  it("it should return an error of SecretValidationError", () => {
    const error = new SecretValidationError("Secret is too short.");
    expect(error).toBeInstanceOf(SecretValidationError);
    expect(error.name).toBe("SecretValidationError");
    expect(error.message).toBe("Secret is too short.");
  });
});
