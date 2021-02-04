import { solve } from '../index';
test('solve *input', () => {
	expect(solve('solve input')).toBe('solve input');
});
test('solve *empty input', () => {
	expect(solve()).toBe('empty input');
});
