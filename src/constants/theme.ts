import {
    ActionIcon,
    Badge,
    Button,
    CloseButton,
    type CSSVariablesResolver,
    defaultCssVariablesResolver,
    defaultVariantColorsResolver,
    Input,
    InputWrapper,
    type MantineThemeOverride,
    Pill,
    PillGroup,
    Switch,
    Title,
    type VariantColorsResolver
} from '@mantine/core';

export const v6VariantColorResolver: VariantColorsResolver = (input) => {
    const resolved = defaultVariantColorsResolver(input);

    if (input.variant === 'muted') {
        return {
            ...resolved,
            background: 'transparent',
            border: '1px solid transparent',
            color: 'var(--icon-medium)',
            hover: 'var(--bg-base)',
            hoverColor: 'var(--icon-subtle)'
        };
    }

    if (input.variant === 'filled' && input.color === 'yellow') {
        return {
            ...resolved,
            color: 'var(--mantine-color-black)',
            hoverColor: 'var(--mantine-color-black)'
        };
    }

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
    const lightTextColor = shade
        ? undefined
        : input.theme.colors[colorName]?.[6];
    const lightHoverTextColor = shade
        ? undefined
        : input.theme.colors[colorName]?.[7];

    if (!lightBackgroundColor || !lightTextColor || !lightHoverTextColor) {
        return resolved;
    }

    return input.variant === 'light'
        ? {
              ...resolved,
              background: lightBackgroundColor,
              color: lightTextColor,
              hover: lightHoverColor ?? lightBackgroundColor,
              hoverColor: lightHoverTextColor
          }
        : {
              ...resolved,
              color: lightTextColor,
              hover: lightBackgroundColor,
              hoverColor: lightHoverTextColor
          };
};

export const v6CssVariablesResolver: CSSVariablesResolver = (theme) => {
    const resolved = defaultCssVariablesResolver(theme);

    Object.keys(theme.colors).forEach((color) => {
        if (!Array.isArray(theme.colors[color])) return;

        resolved.light[
            `--mantine-color-${color}-light-color`
        ] = `var(--mantine-color-${color}-6)`;
    });

    return resolved;
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
            vars: (_, props) => {
                const sizes = {
                    xs: { '--ai-size': '1rem' },
                    sm: { '--ai-size': '1.25rem' },
                    md: { '--ai-size': '1.5rem' },
                    lg: { '--ai-size': '2rem' },
                    xl: { '--ai-size': '2.5rem' }
                } as const;

                return {
                    root: { ...sizes[props.size as keyof typeof sizes] }
                };
            }
        }),
        Badge: Badge.extend({
            defaultProps: {},
            styles: {
                root: {
                    lineHeight: 'normal'
                }
            },
            vars: (theme, props) => {
                const size = props.size ?? 'md';

                const sizes = {
                    sm: {
                        '--badge-fz': theme.fontSizes['2xs'],
                        '--badge-height': '16px',
                        '--badge-padding-x': theme.spacing.xs
                    },
                    md: {
                        '--badge-fz': theme.fontSizes.xs,
                        '--badge-padding-x': theme.spacing.xs
                    }
                } as const;

                return {
                    root: {
                        ...sizes[size as keyof typeof sizes]
                    }
                };
            }
        }),

        Button: Button.extend({
            styles: {
                label: {
                    lineHeight: 'normal'
                }
            },
            vars: (theme, props) => {
                const sizes = {
                    xs: {
                        '--button-height': '1.5rem',
                        '--button-padding-x': theme.spacing.xs
                    },
                    sm: {
                        '--button-height': '2rem',
                        '--button-padding-x': theme.spacing.sm
                    },
                    md: {
                        '--button-fz': '.875rem',
                        '--button-height': '2.5rem',
                        '--button-padding-x': theme.spacing.sm
                    },
                    'compact-sm': {
                        '--button-height': '1.5rem'
                    },
                    'compact-xs': {
                        '--button-height': '1.25rem',
                        '--button-padding-x': theme.spacing.xs
                    }
                } as const;

                return {
                    root: {
                        '--button-bd':
                            props.variant === 'outline'
                                ? `1px solid ${theme.colors.gray[2]}`
                                : undefined,
                        ...sizes[props.size as keyof typeof sizes]
                    }
                };
            }
        }),
        CloseButton: CloseButton.extend({
            styles: {
                root: {
                    color: 'var(--text-subtle)'
                }
            },
            vars: (_, props) => {
                const sizes = {
                    xs: {
                        '--cb-size': '16px'
                    },
                    sm: {
                        '--cb-size': '20px'
                    },
                    md: {
                        '--cb-size': '24px'
                    },
                    lg: {
                        '--cb-size': '32px'
                    },
                    xl: {
                        '--cb-size': '40px'
                    }
                } as const;

                return {
                    root: {
                        ...sizes[props.size as keyof typeof sizes]
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
        Pill: Pill.extend({
            styles: {
                remove: {
                    color: 'gray'
                },
                root: {
                    borderRadius: 'sm'
                }
            }
        }),
        PillGroup: PillGroup.extend({
            styles: {
                group: {
                    alignItems: 'center'
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
    fontWeights: {
        bold: '600',
        medium: '500',
        regular: '400'
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
