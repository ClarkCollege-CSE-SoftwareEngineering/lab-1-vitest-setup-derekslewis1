import { describe, it, expect } from 'vitest';
import { slugify, truncate, capitalize, countWords } from './strings';

describe('string utilities', () => {
  describe('slugify', () => {
    it('converts a simple string to a slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('handles multiple spaces', () => {
      expect(slugify('Hello    World')).toBe('hello-world');
    });

    it('removes special characters', () => {
      expect(slugify('Hello, World!')).toBe('hello-world');
    });

    it('handles leading and trailing spaces', () => {
      expect(slugify('  Hello World  ')).toBe('hello-world');
    });

    it('handles already lowercase strings', () => {
      expect(slugify('hello world')).toBe('hello-world');
    });

    // New test case for numbers / mixed characters
    it('handles numbers and mixed characters', () => {
	expect(slugify('Hello World 123')).toBe('hello-world-123');
    });
  });

  describe('truncate', () => {
    it('returns the original string if shorter than maxLength', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });

    it('truncates and adds default suffix', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
    });

    it('uses custom suffix', () => {
      expect(truncate('Hello World', 9, '…')).toBe('Hello Wo…');
    });

    it('handles exact length strings', () => {
      expect(truncate('Hello', 5)).toBe('Hello');
    });

    // New truncate test for 3 letters
    it('handles small lengths', () => {
	expect(truncate('Hello World', 3)).toBe('...');
    });
  });

  describe('capitalize', () => {
    it('capitalizes a lowercase word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('handles already capitalized words', () => {
      expect(capitalize('HELLO')).toBe('Hello');
    });

    it('returns empty string for empty input', () => {
      expect(capitalize('')).toBe('');
    });

    // New test for capitalization with mixed capitalization
    it('Handles a mixed range of capitalization', () => {
      expect(capitalize('HeLlO')).toBe('Hello');
    });
  });

  describe('countWords', () => {
    it('counts words in a simple sentence', () => {
      expect(countWords('Hello world')).toBe(2);
    });

    it('handles multiple spaces between words', () => {
      expect(countWords('Hello    world')).toBe(2);
    });

    it('returns zero for empty string', () => {
      expect(countWords('')).toBe(0);
    });

    it('returns zero for whitespace-only string', () => {
      expect(countWords('   ')).toBe(0);
    });

    // new test for sentences with commas
    it('counts words in sentences with commas', () => {
      expect(countWords('Hello there, Derek!')).toBe(3);
    });
  });
});
