import { renderHook } from '@testing-library/react';
import useToggle from '..';

describe('useToggle', () => {
  it('test on init', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });
});
