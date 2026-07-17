import {
    ActionIcon,
    Badge,
    Button,
    defaultVariantColorsResolver,
    Input,
    InputWrapper,
    type MantineThemeOverride,
    Switch,
    Title,
    type VariantColorsResolver
} from '@mantine/core';

const v6VariantColorResolver: VariantColorsResolver = (input) => {
    const resolved = defaultVariantColorsResolver(input);

    if (input.variant !== 'light' && input.variant !== 'subtle') {
        return resolved;
    }

    const color = input.color ?? input.theme.primaryColor;
    const [colorName, shade] = color.split('.');
    const lightBackgroundColor = shade
        ? undefined
        : input.theme.colors[colorName]?.[0];
    const lightHoverColor = shade
        ? undefined
        : input.theme.colors[colorName]?.[1];

    if (!lightBackgroundColor) {
        return resolved;
    }

    return input.variant === 'light'
        ? {
              ...resolved,
              background: lightBackgroundColor,
              hover: lightHoverColor ?? lightBackgroundColor
          }
        : {
              ...resolved,
              hover: lightBackgroundColor
          };
};

// https://v6.mantine.dev/styles/global-styles/
export const theme: MantineThemeOverride = {
    black: '#212529', // Text/default → gray/9
    colors: {
        blue: [
            '#E9F4FF',
            '#D6E3FA',
            '#ADC5EE',
            '#81A5E3',
            '#5B89D9',
            '#4478D4',
            '#2D67CB',
            '#275EBB',
            '#1D54A8',
            '#094896'
        ],
        gray: [
            '#F8F9FA',
            '#F1F3F5',
            '#E9ECEF',
            '#DEE2E6',
            '#CED4DA',
            '#ADB5BD',
            '#868E96',
            '#495057',
            '#343A40',
            '#212529'
        ],
        green: [
            '#EAFBF5',
            '#DCF3EA',
            '#B8E5D3',
            '#90D7BA',
            '#70CBA6',
            '#5BC498',
            '#4FC091',
            '#3EA97D',
            '#349A71',
            '#1E805A'
        ],
        orange: [
            '#FDF8F7',
            '#FCF0EE',
            '#F9DDD7',
            '#F7CAC0',
            '#F6B6A7',
            '#F49A85',
            '#F47559',
            '#EE5F3F',
            '#E7421D',
            '#CC3A1A'
        ],
        red: [
            '#FFECE5',
            '#FFD8CF',
            '#FCB09F',
            '#F8856C',
            '#F56647',
            '#F34924',
            '#F33C15',
            '#D92E08',
            '#C22605',
            '#AA1B00'
        ],
        violet: [
            '#F3F0FF',
            '#E5DBFF',
            '#D0BFFF',
            '#B197FC',
            '#9775FA',
            '#845EF7',
            '#7950F2',
            '#7048E8',
            '#6741D9',
            '#5F3DC4'
        ],
        yellow: [
            '#FFF9DF',
            '#FFF1CA',
            '#FFE399',
            '#FFD363',
            '#FFCB48',
            '#FFBD18',
            '#FFB902',
            '#F79009',
            '#DC6803',
            '#B54708'
        ]
    },
    components: {
        ActionIcon: ActionIcon.extend({
            styles: (_, props) => {
                const sizeMap = {
                    xs: '16px',
                    sm: '20px',
                    md: '24px',
                    lg: '32px',
                    xl: '40px'
                } as const;
                const size = sizeMap[props.size as keyof typeof sizeMap];

                return {
                    root: size
                        ? {
                              height: size,
                              minHeight: size,
                              minWidth: size,
                              width: size
                          }
                        : undefined
                };
            }
        }),
        Badge: Badge.extend({
            styles: (theme, props) => {
                const sizeStyles =
                    props.size === 'sm'
                        ? {
                              fontSize: '0.625rem',
                              height: '16px',
                              lineHeight: 'normal',
                              padding: `0 ${theme.spacing.xs}`
                          }
                        : props.size === 'md'
                        ? {
                              fontSize: '0.75rem',
                              height: '20px',
                              lineHeight: 'normal',
                              padding: `0 ${theme.spacing.xs}`
                          }
                        : {};

                if (props.variant === 'dot') {
                    return {
                        root: {
                            ...sizeStyles,
                            backgroundColor: theme.white,
                            borderColor:
                                props.color === 'dark'
                                    ? theme.colors.gray[2]
                                    : undefined,
                            color: theme.black
                        }
                    };
                }

                if (props.variant === 'filled') {
                    return {
                        root: {
                            ...sizeStyles,
                            backgroundColor:
                                props.color === 'green'
                                    ? theme.colors.green[7]
                                    : props.color === 'dark'
                                    ? theme.colors.gray[7]
                                    : undefined,
                            color:
                                props.color === 'yellow'
                                    ? theme.black
                                    : undefined
                        }
                    };
                }

                if (
                    (props.variant === 'light' ||
                        props.variant === 'outline') &&
                    props.color === 'dark'
                ) {
                    return {
                        root: {
                            ...sizeStyles,
                            borderColor: theme.colors.gray[2],
                            color: theme.colors.gray[7]
                        }
                    };
                }

                return { root: sizeStyles };
            }
        }),
        Button: Button.extend({
            styles: (theme, props) => {
                const sizeMap = {
                    xs: {
                        compactHeight: '1.25rem',
                        height: '1.5rem'
                    },
                    sm: {
                        compactHeight: '1.5rem',
                        height: '2rem'
                    },
                    md: {
                        compactHeight: '1.75rem',
                        height: '2.5rem'
                    }
                } as const;
                const size = sizeMap[props.size as keyof typeof sizeMap];

                return {
                    root: {
                        borderColor:
                            props.variant === 'default'
                                ? theme.colors.gray[2]
                                : undefined,
                        fontWeight: 500,
                        height: size?.height,
                        padding: size ? `0 ${theme.spacing.sm}` : undefined
                    }
                };
            }
        }),
        Input: Input.extend({
            styles: (theme, props) => ({
                input: {
                    borderColor:
                        props.variant === 'default'
                            ? theme.colors.gray[2]
                            : undefined,
                    height: '2rem',
                    minHeight: '2rem'
                    // paddingLeft:
                    //     props.variant === 'unstyled'
                    //         ? theme.spacing['2xs']
                    //         : theme.spacing.xs,
                    // paddingRight:
                    //     props.variant === 'unstyled'
                    //         ? theme.spacing['2xs']
                    //         : theme.spacing.xs
                }
            })
        }),
        InputWrapper: InputWrapper.extend({
            styles: {
                error: {
                    whiteSpace: 'normal'
                },
                label: {
                    alignItems: 'center',
                    display: 'inline-flex',
                    fontWeight: 400,
                    gap: '4px'
                }
            }
        }),
        Switch: Switch.extend({
            styles: {
                label: {
                    alignItems: 'center',
                    display: 'inline-flex',
                    gap: '4px'
                }
            }
        }),
        Title: Title.extend({
            styles: (theme) => ({
                root: {
                    color: theme.black
                }
            })
        })
    },
    cursorType: 'pointer',
    defaultRadius: 'sm',
    fontFamily: '"Source Sans 3", sans-serif',
    fontFamilyMonospace: '"Source Code Pro", monospace',
    fontSizes: {
        '2xs': '0.625rem', // 10px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem' // 20px
    },
    headings: {
        fontWeight: '600',
        sizes: {
            h1: { fontSize: '40px', lineHeight: '1.2' }, // xl
            h2: { fontSize: '36px', lineHeight: '1.2' }, // lg
            h3: { fontSize: '32px', lineHeight: '1.2' }, // md
            h4: { fontSize: '24px', lineHeight: '1.2' }, // sm
            h5: { fontSize: '20px', lineHeight: '1.2' }, // xs
            h6: { fontSize: '16px', lineHeight: '1.2' } // 2xs
        }
    },
    lineHeights: {
        xs: '1.5',
        sm: '1.5',
        md: '1.5',
        lg: '1.5',
        xl: '1.5'
    },
    primaryColor: 'blue',
    primaryShade: 6,
    radius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px'
    },

    shadows: {
        sm: '0 3px 3px rgba(230, 230, 230, 0.3)' /* Level 1 — cards, inputs  */,
        md: '0px 0px 25px -5px rgba(230, 230, 230, 0.1)' /* Level 2 — modals, panels */
    },
    spacing: {
        '3xs': '2px',
        '2xs': '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px'
    },
    variantColorResolver: v6VariantColorResolver
};
