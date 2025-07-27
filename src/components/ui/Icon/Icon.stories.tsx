import Icon from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'UI/Icon',
    component: Icon,
    argTypes: {
        type: { control: 'text' },
        size: {
            control: 'select',
            options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl']
        },
        color: {
            control: 'select',
            options: ['blue', 'red', 'green', 'gray', 'yellow', 'orange', 'purple', 'pink']
        }
    }
} as Meta<typeof Icon>;

export const Default: StoryObj<typeof Icon> = {
    args: {
        type: 'IconHeart',
        size: 'md',
        color: 'red'
    }
};

export const Sizes: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconStar" size="2xs" color="blue" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>2xs</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconStar" size="xs" color="blue" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>xs</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconStar" size="sm" color="blue" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>sm</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconStar" size="md" color="blue" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>md</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconStar" size="lg" color="blue" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>lg</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconStar" size="xl" color="blue" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>xl</div>
            </div>
        </div>
    )
};

export const Colors: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconHeart" size="lg" color="red" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>Red</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconHeart" size="lg" color="blue" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>Blue</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconHeart" size="lg" color="green" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>Green</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconHeart" size="lg" color="yellow" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>Yellow</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconHeart" size="lg" color="orange" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>Orange</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Icon type="IconHeart" size="lg" color="gray" />
                <div style={{ fontSize: '12px', marginTop: '5px' }}>Gray</div>
            </div>
        </div>
    )
};

export const CommonIcons: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', maxWidth: '600px' }}>
            {[
                { type: 'IconHome', label: 'Home' },
                { type: 'IconUser', label: 'User' },
                { type: 'IconSettings', label: 'Settings' },
                { type: 'IconMail', label: 'Mail' },
                { type: 'IconPhone', label: 'Phone' },
                { type: 'IconCalendar', label: 'Calendar' },
                { type: 'IconSearch', label: 'Search' },
                { type: 'IconPlus', label: 'Plus' },
                { type: 'IconMinus', label: 'Minus' },
                { type: 'IconX', label: 'Close' },
                { type: 'IconCheck', label: 'Check' },
                { type: 'IconAlertTriangle', label: 'Warning' },
                { type: 'IconInfo', label: 'Info' },
                { type: 'IconHelp', label: 'Help' },
                { type: 'IconEdit', label: 'Edit' },
                { type: 'IconTrash', label: 'Delete' },
                { type: 'IconDownload', label: 'Download' },
                { type: 'IconUpload', label: 'Upload' }
            ].map(({ type, label }) => (
                <div key={type} style={{ textAlign: 'center' }}>
                    <Icon type={type} size="lg" color="blue" />
                    <div style={{ fontSize: '10px', marginTop: '5px' }}>{label}</div>
                </div>
            ))}
        </div>
    )
};

export const Navigation: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Icon type="IconChevronLeft" size="lg" color="gray" />
            <Icon type="IconChevronRight" size="lg" color="gray" />
            <Icon type="IconChevronUp" size="lg" color="gray" />
            <Icon type="IconChevronDown" size="lg" color="gray" />
            <Icon type="IconArrowLeft" size="lg" color="blue" />
            <Icon type="IconArrowRight" size="lg" color="blue" />
            <Icon type="IconArrowUp" size="lg" color="blue" />
            <Icon type="IconArrowDown" size="lg" color="blue" />
        </div>
    )
};

export const Social: StoryObj<typeof Icon> = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Icon type="IconBrandGithub" size="lg" color="gray" />
            <Icon type="IconBrandTwitter" size="lg" color="blue" />
            <Icon type="IconBrandLinkedin" size="lg" color="blue" />
            <Icon type="IconBrandFacebook" size="lg" color="blue" />
            <Icon type="IconBrandInstagram" size="lg" color="pink" />
            <Icon type="IconBrandYoutube" size="lg" color="red" />
        </div>
    )
};

export const InvalidIcon: StoryObj<typeof Icon> = {
    args: {
        type: 'IconNonExistent',
        size: 'lg',
        color: 'red'
    }
};