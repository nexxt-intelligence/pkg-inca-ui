export const cx = (...classNames: unknown[]) =>
    classNames
        .filter(
            (className): className is string => typeof className === 'string'
        )
        .join(' ');
