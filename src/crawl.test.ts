import { expect, test } from "vitest";
import { normalizeURL } from "./crawl";

test("normalizes url with https and /", () => {
  const url = "https://blog.boot.dev/path/";
  const normalizedUrl = "blog.boot.dev/path";
  expect(normalizeURL(url)).toBe(normalizedUrl);
});

test("normalizes url with https", () => {
  const url = "https://blog.boot.dev/path";
  const normalizedUrl = "blog.boot.dev/path";
  expect(normalizeURL(url)).toBe(normalizedUrl);
});

test("normalizes url with http and /", () => {
  const url = "http://blog.boot.dev/path/";
  const normalizedUrl = "blog.boot.dev/path";
  expect(normalizeURL(url)).toBe(normalizedUrl);
});

test("normalizes url with http", () => {
  const url = "http://blog.boot.dev/path";
  const normalizedUrl = "blog.boot.dev/path";
  expect(normalizeURL(url)).toBe(normalizedUrl);
});
