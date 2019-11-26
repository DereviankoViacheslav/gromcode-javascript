function bind(func, context, ...args) {
    // let bindArgs = [].slice.call(arguments, 2);
    return function(...fnArgs) {
        // let fnArgs = [].slice.call(arguments);
        return func.call(context, ...args, ...fnArgs);
      };
}

export { bind };