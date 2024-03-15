import { expect, test } from "vitest";
import { detectImposters } from "./main";

test("empty string", () => {
  expect(detectImposters("")).toBe("BLOW IT UP");
});

test("one uppercase letter", () => {
  expect(detectImposters("A")).toBe("A");
});

test("one lowercase letter", () => {
  expect(detectImposters("a")).toBe("BLOW IT UP");
});

test("one of each", () => {
  expect(detectImposters("Aa")).toBe("A");
});

test("non-letter characters", () => {
  expect(detectImposters("!£$%^&*@#")).toBe("BLOW IT UP");
});

test("every other character", () => {
  expect(detectImposters("A!B£C$D%E^F&G*H@I#")).toBe("ABCDEFGHI");
});

test("half lowercase", () => {
  expect(detectImposters("ABCDEFGHIJKLMnopqrstuvwxyz")).toBe("ABCDEFGHIJKLM");
});

test("more than half", () => {
  expect(detectImposters("ABCDEFGHIJKLmnopqrstuvwxyz")).toBe("mnopqrstuvwxyz");
});

test("uppercase alphabet", () => {
  expect(detectImposters("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
});

test("lowercase alphabet", () => {
  expect(detectImposters("abcdefghijklmnopqrstuvwxyz")).toBe("BLOW IT UP");
});
