function bind(func, context, ...args) {
    return function() {
        return func.apply(context, args);
      };
}

export { bind };