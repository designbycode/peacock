import { describe, it, expect } from 'vitest';
import { peacock } from './index';

describe('peacock', () => {
  it('generates a color scale with default options', () => {
    const result = peacock({ baseColor: '#2A669F' });
    expect(result).toHaveProperty('DEFAULT', '#2A669F');
    expect(result).toHaveProperty('50');
    expect(result).toHaveProperty('100');
    expect(result).toHaveProperty('900');
    expect(result).toHaveProperty('950');
  });

  it('respects custom step amounts', () => {
    const result = peacock({ baseColor: '#2A669F', upSteps: 3, downSteps: 3 });
    expect(Object.keys(result)).toHaveLength(9); // DEFAULT + 3 up + 3 down + 50 + 950
  });

  it('applies hue shift', () => {
    const result = peacock({ baseColor: '#2A669F', hueShift: 10 });
    expect(result['100']).not.toBe('#5485B4'); // This would be the result without hue shift
  });
});

