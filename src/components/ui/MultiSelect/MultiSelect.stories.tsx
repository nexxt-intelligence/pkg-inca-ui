import type { Meta, StoryObj } from '@storybook/react';
import MultiSelect from './index';

const meta: Meta<typeof MultiSelect> = {
    title: 'UI/MultiSelect',
    component: MultiSelect,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'A customizable MultiSelect component built on top of Mantine MultiSelect with additional features like tooltips and loading states.'
            }
        }
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Label text for the MultiSelect'
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text when no options are selected'
        },
        data: {
            control: 'object',
            description: 'Array of options for the MultiSelect'
        },
        showTooltip: {
            control: 'boolean',
            description: 'Whether to show a tooltip icon next to the label'
        },
        tooltipText: {
            control: 'text',
            description: 'Text to display in the tooltip'
        },
        loading: {
            control: 'boolean',
            description: 'Whether to show a loading spinner'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the MultiSelect is disabled'
        },
        error: {
            control: 'text',
            description: 'Error message to display'
        },
        required: {
            control: 'boolean',
            description: 'Whether the field is required'
        },
        searchable: {
            control: 'boolean',
            description: 'Whether the MultiSelect is searchable'
        },
        clearable: {
            control: 'boolean',
            description: 'Whether selected values can be cleared'
        },
        maxSelectedValues: {
            control: 'number',
            description: 'Maximum number of values that can be selected'
        }
    }
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

// Sample data for stories
const sampleData = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'nuxt', label: 'Nuxt.js' },
    { value: 'gatsby', label: 'Gatsby' },
    { value: 'remix', label: 'Remix' }
];

const countriesData = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'au', label: 'Australia' },
    { value: 'br', label: 'Brazil' }
];

export const Default: Story = {
    args: {
        label: 'Select Technologies',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        searchable: true,
        clearable: true
    }
};

export const WithTooltip: Story = {
    args: {
        label: 'Select Countries',
        placeholder: 'Choose countries you have visited',
        data: countriesData,
        showTooltip: true,
        tooltipText: 'Select all countries you have visited or plan to visit',
        searchable: true,
        clearable: true
    }
};

export const Loading: Story = {
    args: {
        label: 'Loading Technologies',
        placeholder: 'Loading options...',
        data: [],
        loading: true,
        disabled: true
    }
};

export const WithError: Story = {
    args: {
        label: 'Select Technologies',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        error: 'Please select at least one technology',
        searchable: true,
        clearable: true
    }
};

export const Required: Story = {
    args: {
        label: 'Required Technologies',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        required: true,
        searchable: true,
        clearable: true
    }
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Technologies',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        disabled: true,
        searchable: true,
        clearable: true
    }
};

export const WithMaxSelectedValues: Story = {
    args: {
        label: 'Select Up to 3 Technologies',
        placeholder: 'Choose up to 3 technologies',
        data: sampleData,
        maxSelectedValues: 3,
        searchable: true,
        clearable: true
    }
};

export const NotSearchable: Story = {
    args: {
        label: 'Non-Searchable Technologies',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        searchable: false,
        clearable: true
    }
};

export const NotClearable: Story = {
    args: {
        label: 'Non-Clearable Technologies',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        searchable: true,
        clearable: false
    }
};

export const WithDefaultValue: Story = {
    args: {
        label: 'Technologies with Default',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        defaultValue: ['react', 'vue'],
        searchable: true,
        clearable: true
    }
};

export const WithDescription: Story = {
    args: {
        label: 'Technologies with Description',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        description: 'Select the technologies you are most familiar with',
        searchable: true,
        clearable: true
    }
};

export const WithTooltipAndDescription: Story = {
    args: {
        label: 'Advanced Technologies',
        placeholder: 'Choose your favorite technologies',
        data: sampleData,
        description: 'Select the technologies you are most familiar with',
        showTooltip: true,
        tooltipText: 'This selection will be used to customize your experience',
        searchable: true,
        clearable: true
    }
};
