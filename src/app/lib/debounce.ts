export const debounce = (mainFunction: Function, delay: number) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer: ReturnType<typeof setTimeout>;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};