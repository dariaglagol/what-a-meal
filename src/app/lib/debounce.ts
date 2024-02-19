export const debounce = (mainFunction: Function, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  // @ts-ignore
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

export default debounce;
