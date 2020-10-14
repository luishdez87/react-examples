import createTask from './createTask';
import { act, renderHook } from '@testing-library/react-hooks';

describe('create task', () => {
  it('create a new task on enter', () => {
    const setValue = () => null;
    const { result } = renderHook(() => createTask( {setValue} ));
    console.log(result.current);
    // const dummy = {
    //   target: {
    //     value: 'some'
    //   }
    // };

    // act(() => {
    //   result.current.updateText(dummy);
    // });
    expect(result.current.text).toBe('some');
  })
})