import { expect, test } from "vitest";
import { detectIntruders } from "./main";

test("empty string", () => {
  expect(detectIntruders("")).toBe("BLOW IT UP");
});

test("one uppercase letter", () => {
  expect(detectIntruders("A")).toBe("A");
});

test("one lowercase letter", () => {
  expect(detectIntruders("a")).toBe("BLOW IT UP");
});

test("one of each", () => {
  expect(detectIntruders("Aa")).toBe("A");
});

test("non-letter characters", () => {
  expect(detectIntruders("!£$%^&*@#")).toBe("BLOW IT UP");
});

test("every other character", () => {
  expect(detectIntruders("A!B£c$D%E^F&G*H@I#")).toBe("ABCDEFGHI");
});

test("half lowercase", () => {
  expect(detectIntruders("ABCDEFGHIJKLMnopqrstuvwxyz")).toBe("ABCDEFGHIJKLM");
});

test("more than half", () => {
  expect(detectIntruders("ABCDEFGHIJKLmnopqrstuvwxyz")).toBe("mnopqrstuvwxyz");
});

test("uppercase alphabet", () => {
  expect(detectIntruders("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
});

test("lowercase alphabet", () => {
  expect(detectIntruders("abcdefghijklmnopqrstuvwxyz")).toBe("BLOW IT UP");
});
