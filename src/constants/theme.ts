import type { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
    fontFamily: 'Source Sans 3, sans-serif',
    primaryColor: 'blue',
    headings: {
        fontWeight: 700,
        fontFamily: 'Source Sans 3, sans-serif',
        sizes: {
            h1: { fontSize: '2.5rem', lineHeight: '1.2' },
            h2: { fontSize: '2rem', lineHeight: '1.35' },
            h3: { fontSize: '1.5rem', lineHeight: '1.33' },
            h4: { fontSize: '1.25rem', lineHeight: '1.2' },
            h5: { fontSize: '1rem', lineHeight: '1.25' },
            h6: { fontSize: '0.75rem', lineHeight: '1.33' }
        }
    },

    fontSizes: {
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.87rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
    },
    spacing: {
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
        Button: {
            sizes: {
                sm: (theme) => ({
                    root: {
                        padding: `0 ${theme.spacing.sm}`,
                        borderRadius: theme.radius.sm,
                        height: '32px'
                    }
                }),
                'compact-sm': (theme) => ({
                    root: {
                        padding: `0 ${theme.spacing['2xs']} `,
                        borderRadius: theme.radius.sm,
                        height: '24px'
                    }
                })
            }
        },
        ActionIcon: {
            sizes: {
                xs: (theme) => ({
                    root: {
                        width: '16px',
                        height: '16px',
                        minWidth: '16px',
                        minHeight: '16px',
                        borderRadius: theme.radius.sm
                    }
                }),
                sm: (theme) => ({
                    root: {
                        width: '20px',
                        height: '20px',
                        minWidth: '20px',
                        minHeight: '20px',
                        borderRadius: theme.radius.sm
                    }
                }),
                md: (theme) => ({
                    root: {
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        minHeight: '24px',
                        borderRadius: theme.radius.sm
                    }
                }),
                lg: (theme) => ({
                    root: {
                        width: '32px',
                        height: '32px',
                        minWidth: '32px',
                        minHeight: '32px',
                        borderRadius: theme.radius.sm
                    }
                }),
                xl: (theme) => ({
                    root: {
                        width: '40px',
                        height: '40px',
                        minWidth: '40px',
                        minHeight: '40px',
                        borderRadius: theme.radius.sm
                    }
                })
            }
        }
    }
};
