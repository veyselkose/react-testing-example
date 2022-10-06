import { render, screen } from "@testing-library/react";
import EmojiResults from "../EmojiResults";
import "@testing-library/jest-dom";
import filterEmoji from "../filterEmoji";

test("Emoji Result", () => {
  render(<EmojiResults emojiData={filterEmoji("", 20)} />);
  const emojiList = screen.getAllByText("Click to copy emoji");
  expect(emojiList.length).toEqual(20);
});

test("Filtered Emoji Result", () => {
  render(<EmojiResults emojiData={filterEmoji("smile", 20)} />);
  const emojiList = screen.getAllByText("Click to copy emoji");
  expect(emojiList.length).toBeGreaterThan(1);
});
