import type { Meta, StoryObj } from '@storybook/react';
import ColorInput from './index';
import Icon from '../Icon';

const meta: Meta<typeof ColorInput> = {
    title: 'UI/ColorInput',
    component: ColorInput,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        format: {
            control: 'radio',
            options: ['hex', 'rgb', 'hsl']
        },
        type: {
            control: 'radio',
            options: ['default', 'color']
        },
        disabled: { control: 'boolean' },
        error: { control: 'text' },
        description: { control: 'text' },
        tooltip: { control: 'text' },
        multilineTooltip: { control: 'boolean' }
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ColorInput>;

export const Default: Story = {
    args: {
        label: 'Color Input',
        placeholder: 'Pick a color'
    }
};

export const WithDefaultValue: Story = {
    args: {
        label: 'Color Input with Default',
        defaultValue: '#228be6',
        placeholder: 'Pick a color'
    }
};

export const WithTooltip: Story = {
    args: {
        label: 'Color Input with Tooltip',
        placeholder: 'Hover over the help icon',
        tooltip: 'This is a helpful tooltip message for color selection'
    }
};

export const WithMultilineTooltip: Story = {
    args: {
        label: 'Color Input with Multiline Tooltip',
        placeholder: 'Hover over the help icon',
        tooltip:
            'This is a longer tooltip message that spans multiple lines to demonstrate the multiline tooltip functionality for color inputs',
        multilineTooltip: true
    }
};

export const HexFormat: Story = {
    args: {
        label: 'Hex Format',
        format: 'hex',
        defaultValue: '#228be6',
        placeholder: 'Enter hex color'
    }
};

export const RGBFormat: Story = {
    args: {
        label: 'RGB Format',
        format: 'rgb',
        defaultValue: 'rgb(34, 139, 230)',
        placeholder: 'Enter RGB color'
    }
};

export const HSLFormat: Story = {
    args: {
        label: 'HSL Format',
        format: 'hsl',
        defaultValue: 'hsl(210, 74%, 52%)',
        placeholder: 'Enter HSL color'
    }
};

export const WithSwatches: Story = {
    args: {
        label: 'Color Input with Swatches',
        defaultValue: '#228be6',
        swatches: [
            '#D53F8C',
            '#805AD5',
            '#3182CE',
            '#38A169',
            '#DD6B20',
            '#E53E3E',
            '#D69E2E',
            '#4A5568'
        ]
    }
};

export const WithCustomSwatches: Story = {
    args: {
        label: 'Custom Color Swatches',
        defaultValue: '#228be6',
        swatches: [
            '#FF0000',
            '#00FF00',
            '#0000FF',
            '#FFFF00',
            '#FF00FF',
            '#00FFFF',
            '#FFA500',
            '#800080',
            '#008000',
            '#FFC0CB'
        ]
    }
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Color Input',
        defaultValue: '#228be6',
        disabled: true
    }
};

export const WithError: Story = {
    args: {
        label: 'Color Input with Error',
        defaultValue: '#invalid',
        error: 'Please enter a valid color value'
    }
};

export const WithDescription: Story = {
    args: {
        label: 'Color Input with Description',
        defaultValue: '#228be6',
        description: 'Choose a color for your theme customization'
    }
};

export const Required: Story = {
    args: {
        label: 'Required Color Input',
        required: true,
        placeholder: 'This field is required'
    }
};

export const WithSize: Story = {
    args: {
        label: 'Large Color Input',
        size: 'lg',
        defaultValue: '#228be6'
    }
};

export const Compact: Story = {
    args: {
        label: 'Compact Color Input',
        size: 'xs',
        defaultValue: '#228be6'
    }
};

export const WithLeftSection: Story = {
    args: {
        label: 'Color Input with Left Section',
        defaultValue: '#228be6',
        leftSection: <Icon type="IconPalette" size="sm" />
    }
};

export const WithRightSection: Story = {
    args: {
        label: 'Color Input with Right Section',
        defaultValue: '#228be6',
        rightSection: <Icon type="IconEye" size="sm" />
    }
};

export const WithLeftFilledSection: Story = {
    args: {
        label: 'Color Input with Left Filled Section',
        defaultValue: '#228be6',
        leftFilledSection: (
            <div
                style={{
                    padding: '0 10px',
                    background: 'var(--mantine-color-gray-1)',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Icon type="IconPalette" size="sm" />
            </div>
        )
    }
};

export const WithRightFilledSection: Story = {
    args: {
        label: 'Color Input with Right Filled Section',
        defaultValue: '#228be6',
        rightFilledSection: (
            <div
                style={{
                    padding: '0 10px',
                    background: 'var(--mantine-color-gray-1)',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Icon type="IconEye" size="sm" />
            </div>
        )
    }
};

export const WithRadius: Story = {
    args: {
        label: 'Rounded Color Input',
        defaultValue: '#228be6',
        radius: 'xl'
    }
};

export const WithStyles: Story = {
    args: {
        label: 'Custom Styled Color Input',
        defaultValue: '#228be6',
        styles: {
            input: {
                borderColor: '#228be6',
                '&:focus': {
                    borderColor: '#1c7ed6'
                }
            }
        }
    }
};

export const WithCloseOnColorSwatchClick: Story = {
    args: {
        label: 'Close on Swatch Click',
        defaultValue: '#228be6',
        closeOnColorSwatchClick: true,
        swatches: [
            '#D53F8C',
            '#805AD5',
            '#3182CE',
            '#38A169',
            '#DD6B20',
            '#E53E3E'
        ]
    }
};

export const WithEyeDropper: Story = {
    args: {
        label: 'Color Input with Eye Dropper',
        defaultValue: '#228be6',
        withEyeDropper: true
    }
};

export const WithEyeDropperButtonProps: Story = {
    args: {
        label: 'Custom Eye Dropper Button',
        defaultValue: '#228be6',
        withEyeDropper: true,
        eyeDropperButtonProps: {
            'aria-label': 'Pick color from screen'
        }
    }
};

export const WithPickerProps: Story = {
    args: {
        label: 'Color Input with Custom Picker',
        defaultValue: '#228be6',
        pickerProps: {
            size: 'lg',
            swatchesPerRow: 8
        }
    }
};

export const WithInputProps: Story = {
    args: {
        label: 'Color Input with Custom Input Props',
        defaultValue: '#228be6',
        inputProps: {
            'aria-label': 'Color picker input',
            'data-testid': 'color-input'
        }
    }
};
