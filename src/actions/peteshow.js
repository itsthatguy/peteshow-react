/* eslint-disable no-console */
export const FILL_OUT_FORM = 'FILL_OUT_FORM';
export const fillOutForm = () => {
  const inputs = document.querySelectorAll('input');

  const data = [...inputs].reduce((result, input) => {
    switch (input.type) {
      case 'text': {
        const fakeValue = 'generated string';
        input.value = fakeValue;
        result.push(fakeValue);
        break;
      }
      case 'tel': {
        const fakeValue = 'generated telephone';
        input.value = fakeValue;
        result.push(fakeValue);
        break;
      }
      case 'submit': {
        break;
      }
      default: {
        break;
      }
    }
    return result;
  }, []);

  return { type: FILL_OUT_FORM, inputs: data };
};
