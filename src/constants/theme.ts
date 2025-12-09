import type { MantineThemeOverride } from '@mantine/core';

// https://v6.mantine.dev/styles/global-styles/
export const theme: MantineThemeOverride = {
    fontFamily: '"Source Sans 3", sans-serif',
    primaryColor: 'blue',
    primaryShade: 6,
    headings: {
        fontWeight: 700,
        fontFamily: '"Source Sans 3", sans-serif',
        sizes: {
            h1: { fontSize: '2.5rem', lineHeight: '1.2' },
            h2: { fontSize: '2rem', lineHeight: '1.2' },
            h3: { fontSize: '1.5rem', lineHeight: '1.2' },
            h4: { fontSize: '1.25rem', lineHeight: '1.2' },
            h5: { fontSize: '1rem', lineHeight: '1.2' },
            h6: { fontSize: '0.75rem', lineHeight: '1.2' }
        }
    },
    defaultRadius: 'sm',
    fontSizes: {
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
    },
    // lineHeight: 1.5,
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
    radius: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px'
    },

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
                xs: () => ({
                    root: {
                        width: '16px',
                        height: '16px',
                        minWidth: '16px',
                        minHeight: '16px'
                    }
                }),
                sm: () => ({
                    root: {
                        width: '20px',
                        height: '20px',
                        minWidth: '20px',
                        minHeight: '20px'
                    }
                }),
                md: () => ({
                    root: {
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        minHeight: '24px'
                    }
                }),
                lg: () => ({
                    root: {
                        width: '32px',
                        height: '32px',
                        minWidth: '32px',
                        minHeight: '32px'
                    }
                }),
                xl: () => ({
                    root: {
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        minHeight: '40px'
                    }
                })
            }
        },
        Button: {
            styles: {
                root: {
                    fontWeight: 500
                }
            },
            variants: {
                default: () => ({
                    root: {
                        borderColor: 'var(--mantine-color-gray-2)'
                    }
                })
            },
            sizes: {
                xs: () => ({
                    root: {
                        padding: '0 var(--mantine-spacing-sm)',
                        height: '1.5rem',
                        '&[data-compact="true"]': {
                            padding: '0 var(--mantine-spacing-xs)',
                            height: '1.25rem'
                        }
                    }
                }),
                sm: () => ({
                    root: {
                        padding: '0 var(--mantine-spacing-sm)',
                        height: '2rem',
                        '&[data-compact="true"]': {
                            padding: '0 var(--mantine-spacing-xs)',
                            height: '1.5rem'
                        }
                    }
                })
            }
        },
        Switch: {
            styles: {
                label: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                }
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
                default: () => ({
                    input: {
                        borderColor: 'var(--mantine-color-gray-2)',
                        paddingLeft: 'var(--mantine-spacing-xs)',
                        paddingRight: 'var(--mantine-spacing-xs)'
                    }
                }),
                filled: () => ({
                    input: {
                        paddingLeft: 'var(--mantine-spacing-xs)',
                        paddingRight: 'var(--mantine-spacing-xs)'
                    }
                }),
                unstyled: () => ({
                    input: {
                        paddingLeft: 'var(--mantine-spacing-2xs)',
                        paddingRight: 'var(--mantine-spacing-2xs)',
                        '&[data-with-icon]': {
                            paddingLeft: '2.25rem'
                        }
                    }
                })
            }
        },
        InputWrapper: {
            defaultProps: {
                inputWrapperOrder: ['label', 'input', 'error', 'description']
            },
            styles: {
                label: {
                    fontWeight: 400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                },
                error: {
                    whiteSpace: 'normal'
                }
            }
        }
    }
};
