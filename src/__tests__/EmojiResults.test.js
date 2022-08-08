import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Emoji Results', () => {
  let inputDOM, emojiResultsDOM;

  const loadEmojiResultsDom = () => {
    return screen.getAllByTestId('emojiResultRow');
  };

  const typeIntoInput = (string) => {
    fireEvent.change(inputDOM, { target: { value: string } });
  };

  const clickToItem = (btn) => {
    fireEvent.click(btn);
  };

  beforeEach(() => {
    render(<App />);
    inputDOM = screen.getByTestId('searchInput');
  });

  it('should be rendered', () => {
    emojiResultsDOM = loadEmojiResultsDom();
    expect(emojiResultsDOM.length).toEqual(20);
  });

  it('should be rendered correctly during the filtering process', () => {
    typeIntoInput('100');
    emojiResultsDOM = loadEmojiResultsDom();
    expect(emojiResultsDOM.length).toBe(1);

    typeIntoInput('gri');
    emojiResultsDOM = loadEmojiResultsDom();
    expect(emojiResultsDOM.length).toBe(4);
  });

  it('should copy emoji when clicked to any emoji', () => {
    const emojiResultDOM = loadEmojiResultsDom().at(0);
    clickToItem(emojiResultDOM);
    expect(
      emojiResultDOM.getAttribute('data-clipboard-text').length
    ).toBeGreaterThan(0);
  });
});
