import type { MantineThemeOverride } from '@mantine/core';

// https://v6.mantine.dev/styles/global-styles/
export const theme: MantineThemeOverride = {
    black: '#212529', // Text/default → gray/9
    colors: {
        // TODO: update colors
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
            '#D0B5FF',
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
        ActionIcon: {
            sizes: {
                lg: () => ({
                    root: {
                        height: '32px',
                        minHeight: '32px',
                        minWidth: '32px',
                        width: '32px'
                    }
                }),
                md: () => ({
                    root: {
                        height: '24px',
                        minHeight: '24px',
                        minWidth: '24px',
                        width: '24px'
                    }
                }),
                sm: () => ({
                    root: {
                        height: '20px',
                        minHeight: '20px',
                        minWidth: '20px',
                        width: '20px'
                    }
                }),
                xl: () => ({
                    root: {
                        height: '40px',
                        minHeight: '40px',
                        minWidth: '40px',
                        width: '40px'
                    }
                }),
                xs: () => ({
                    root: {
                        height: '16px',
                        minHeight: '16px',
                        minWidth: '16px',
                        width: '16px'
                    }
                })
            }
        },
        Badge: {
            sizes: {
                md: (theme) => ({
                    root: {
                        fontSize: '0.75rem',
                        height: '20px',
                        lineHeight: 'normal',
                        padding: `0 ${theme.spacing.xs}`
                    }
                }),
                sm: (theme) => ({
                    root: {
                        fontSize: '0.625rem',
                        height: '16px',
                        lineHeight: 'normal',
                        padding: `0 ${theme.spacing.xs}`
                    }
                })
            },
            variants: {
                dot: (theme, params) => {
                    if (params.color === 'dark') {
                        return {
                            root: {
                                '&::before': {
                                    backgroundColor: theme.colors.gray[7]
                                },
                                backgroundColor: theme.white,
                                borderColor: theme.colors.gray[2],
                                color: theme.black
                            }
                        };
                    }
                    return {
                        root: {
                            backgroundColor: theme.white,
                            color: theme.black
                        }
                    };
                },
                filled: (theme, params) => {
                    if (params.color === 'yellow') {
                        return {
                            root: {
                                color: theme.black
                            }
                        };
                    }
                    if (params.color === 'green') {
                        return {
                            root: {
                                backgroundColor: theme.colors.green[7]
                            }
                        };
                    }
                    if (params.color === 'dark') {
                        return {
                            root: {
                                backgroundColor: theme.colors.gray[7]
                            }
                        };
                    }
                    return { root: {} };
                },
                light: (theme, params) => {
                    if (params.color === 'dark') {
                        return {
                            root: {
                                borderColor: theme.colors.gray[2],
                                color: theme.colors.gray[7]
                            }
                        };
                    }
                    return { root: {} };
                },
                outline: (theme, params) => {
                    if (params.color === 'dark') {
                        return {
                            root: {
                                borderColor: theme.colors.gray[2],
                                color: theme.colors.gray[7]
                            }
                        };
                    }
                    return { root: {} };
                }
            }
        },
        Button: {
            sizes: {
                md: (theme) => ({
                    root: {
                        '&[data-compact="true"]': {
                            height: '1.75rem',
                            padding: `0 ${theme.spacing.xs}`
                        },
                        height: '2.5rem',
                        padding: `0 ${theme.spacing.sm}`
                    }
                }),
                sm: (theme) => ({
                    root: {
                        '&[data-compact="true"]': {
                            height: '1.5rem',
                            padding: `0 ${theme.spacing.xs}`
                        },
                        height: '2rem',
                        padding: `0 ${theme.spacing.sm}`
                    }
                }),
                xs: (theme) => ({
                    root: {
                        '&[data-compact="true"]': {
                            height: '1.25rem',
                            padding: `0 ${theme.spacing.xs}`
                        },
                        height: '1.5rem',
                        padding: `0 ${theme.spacing.sm}`
                    }
                })
            },
            styles: {
                root: {
                    fontWeight: 500
                }
            },
            variants: {
                default: (theme) => ({
                    root: {
                        borderColor: theme.colors.gray[2]
                    }
                })
            }
        },
        Input: {
            styles: {
                input: {
                    height: '2rem',
                    minHeight: '2rem'
                }
            },
            variants: {
                default: (theme) => ({
                    input: {
                        borderColor: theme.colors.gray[2],
                        paddingLeft: theme.spacing.xs,
                        paddingRight: theme.spacing.xs
                    }
                }),
                filled: (theme) => ({
                    input: {
                        paddingLeft: theme.spacing.xs,
                        paddingRight: theme.spacing.xs
                    }
                }),
                unstyled: (theme) => ({
                    input: {
                        '&[data-with-icon]': {
                            paddingLeft: '2.25rem'
                        },
                        paddingLeft: theme.spacing['2xs'],
                        paddingRight: theme.spacing['2xs']
                    }
                })
            }
        },
        InputWrapper: {
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
        },
        Switch: {
            styles: {
                label: {
                    alignItems: 'center',
                    display: 'inline-flex',
                    gap: '4px'
                }
            }
        },
        Title: {
            styles: (theme) => ({
                root: {
                    color: theme.black
                }
            })
        }
    },
    cursorType: 'pointer',
    defaultRadius: 'sm',
    fontFamily: '"Source Sans 3", sans-serif',
    fontSizes: {
        '2xs': '0.625rem', // 10px
        lg: '1.125rem', // 18px
        md: '1rem', // 16px
        sm: '0.875rem', // 14px
        xl: '1.25rem', // 20px
        xs: '0.75rem' // 12px
    },
    headings: {
        fontWeight: 600,
        sizes: {
            h1: { fontSize: '40px', lineHeight: '1.2' }, // xl
            h2: { fontSize: '36px', lineHeight: '1.2' }, // lg
            h3: { fontSize: '32px', lineHeight: '1.2' }, // md
            h4: { fontSize: '24px', lineHeight: '1.2' }, // sm
            h5: { fontSize: '20px', lineHeight: '1.2' }, // xs
            h6: { fontSize: '16px', lineHeight: '1.2' } // 2xs
        }
    },
    lineHeight: 1.5,
    primaryColor: 'blue',
    primaryShade: 6,

    radius: {
        '2xl': '32px',
        lg: '16px',
        md: '8px',
        sm: '4px',
        xl: '24px',
        xs: '2px'
    },
    spacing: {
        '2xl': '32px',
        '2xs': '4px',
        '3xl': '40px',
        '3xs': '2px',
        lg: '20px',
        md: '16px',
        sm: '12px',
        xl: '24px',
        xs: '8px'
    }
};
