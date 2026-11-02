import {
    Box,
    Burger,
    Group,
    AppShell as MantineAppShell,
    AppShellProps as MantineAppShellProps,
    NavLinkProps as MantineNavLinkProps,
    Navbar,
    NavLink,
    Stack,
    Title
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import { cx } from '../../../utils/cx';
import Footer from '../Footer';
import Icon from '../Icon';
import Text from '../Text';
import classes from './AppShell.module.css';

const STATIC_STORAGE_URL =
    'https://nexxt-inca-storage.s3.us-east-2.amazonaws.com';

const defaultLogoIcon = (
    <img
        height="30"
        src={`${STATIC_STORAGE_URL}/img/inca_blue_favicon.png`}
        width="30"
    />
);

const defaultLogoFull = (
    <>
        <img
            height="26"
            src={`${STATIC_STORAGE_URL}/img/inca_blue_favicon.png`}
            width="26"
        />
        <img
            height="32"
            src={`${STATIC_STORAGE_URL}/img/inca_logo_text.png`}
            width="76"
        />
    </>
);

export interface AppShellProps extends StrictProps<MantineAppShellProps> {
    /** URL of the active nav link (highlighted). */
    activeLink: string;
    /** Content shown next to the subtitle. */
    headerBadge?: React.ReactNode;
    /** Content shown under the title row. */
    headerBottomContent?: React.ReactNode;
    /** Content shown on the right of the title row (e.g. actions). */
    headerRightContent?: React.ReactNode;
    /** Small uppercase text above the title. */
    headerSubtitle?: string;
    /** Page title. */
    headerTitle?: string; // TODO: revert back to required
    /** Content shown right after the title. */
    headerTitleAddon?: React.ReactNode;
    /** Keeps the header visible while scrolling. */
    isFixedHeader?: boolean;
    /** Switches to the mobile layout (top bar with burger menu). */
    isMobile: boolean;
    /** Whether the left navbar is shown. */
    isNavbarOpen: boolean;
    /** Full logo shown in the mobile header. Use for white-labeling. */
    logoFull?: React.ReactNode;
    /** Small logo shown at the top of the navbar. Use for white-labeling. */
    logoIcon?: React.ReactNode;
    /** URL opened from the profile nav link. */
    manageProfileUrl?: string;
    /** Main nav links shown in the navbar. */
    navLinkItems: NavLinkItem[];
    /** Not used yet. */
    openFeedback?: () => void;
    /** Shows a Help nav link that calls this function. */
    openHelp?: () => void;
    /** Called with the URL when a nav link is clicked. */
    setActiveLink: (url: string) => void;
    /** Shows the Privacy / Terms footer. */
    showFooter?: boolean;
    /** Called when the Logout nav link is clicked. */
    signOut: () => void;
    /** Called when the mobile burger menu is clicked. */
    toggleNavbar: () => void;
    /** Shown as the label of the profile nav link. */
    userFirstName?: string;
    /** Image URL for the profile nav link. */
    userProfilePicture?: string;
}

export interface NavLinkItem extends StrictProps<MantineNavLinkProps> {
    /** Status icon shown on top of the nav icon. */
    healthIcon?: React.ReactNode;
    /** Called when the link is clicked. Takes priority over `url`. */
    onClick?: () => void;
    /** Path this link navigates to. */
    url?: string;
}

/**
 * Page layout used by every inca app: left navbar, page header and footer. Built on Mantine [AppShell](https://v6.mantine.dev/core/app-shell/).
 */
const AppShell = ({ ...props }: AppShellProps) => {
    const {
        activeLink,
        children,
        headerBadge,
        headerBottomContent,
        headerRightContent,
        headerSubtitle,
        headerTitle,
        headerTitleAddon,
        isFixedHeader = false,
        isMobile,
        isNavbarOpen,
        logoFull = defaultLogoFull,
        logoIcon = defaultLogoIcon,
        manageProfileUrl,
        navLinkItems,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        openFeedback,
        openHelp,
        setActiveLink,
        showFooter = true,
        signOut,
        toggleNavbar,
        userFirstName,
        userProfilePicture,
        ...mantineAppShellProps
    } = props;

    const navLinkBottomItems = [
        openHelp && {
            icon: <Icon size="md" type="IconHelp" />,
            label: 'Help',
            onClick: openHelp
        },
        (userFirstName || userProfilePicture) && {
            icon: userProfilePicture ? (
                <span className={classes.userProfilePictureContainer}>
                    <img
                        className={classes.userProfilePicture}
                        src={userProfilePicture}
                    />
                </span>
            ) : (
                <Icon size="md" type="IconUserCircle" />
            ),
            label: userFirstName ? userFirstName : 'Profile',
            onClick: () => setActiveLink(manageProfileUrl || '/manage-profile')
        },
        {
            icon: <Icon size="md" type="IconLogout" />,
            label: 'Logout',
            onClick: signOut
        }
    ].filter(Boolean) as NavLinkItem[];

    const renderNavLinks = (item: NavLinkItem[]) => {
        return item.map(
            ({ disabled, healthIcon, icon, label, onClick, url }) => (
                <NavLink
                    active={url ? activeLink === url.split('?')[0] : undefined}
                    classNames={{
                        body: classes.navLinkBody,
                        icon: classes.navLinkIcon,
                        label: classes.navLinkLabel,
                        root: classes.navLinkRoot
                    }}
                    disabled={disabled}
                    icon={
                        healthIcon ? (
                            <>
                                {healthIcon}
                                {icon}
                            </>
                        ) : (
                            icon
                        )
                    }
                    key={String(label)}
                    label={label}
                    onClick={() => {
                        if (onClick) {
                            onClick();
                        } else if (url) {
                            setActiveLink(url.split('?')[0]);
                        }
                    }}
                />
            )
        );
    };

    return (
        <MantineAppShell
            classNames={{
                main: classes.main,
                root: classes.root
            }}
            data-fixed={isFixedHeader}
            data-mobile={isMobile}
            footer={showFooter ? <Footer /> : undefined}
            layout={!isMobile ? 'alt' : 'default'}
            navbar={
                <Navbar
                    className={cx(
                        classes.navbar,
                        !isNavbarOpen && classes.hidden
                    )}
                    height={'auto'}
                    width={{ base: 85 }}
                >
                    <Navbar.Section>
                        <div
                            className={cx(
                                classes.iconLogo,
                                isMobile && classes.hidden
                            )}
                        >
                            {logoIcon}
                        </div>
                    </Navbar.Section>
                    <Navbar.Section grow>
                        {renderNavLinks(navLinkItems)}
                    </Navbar.Section>
                    <Navbar.Section>
                        {renderNavLinks(navLinkBottomItems)}
                    </Navbar.Section>
                </Navbar>
            }
            navbarOffsetBreakpoint={isNavbarOpen ? '' : 'md'}
            {...mantineAppShellProps}
        >
            <header className={headerTitle ? classes.header : undefined}>
                <Stack spacing={0}>
                    {isMobile && (
                        <div className={classes.mobileHeader}>
                            <Burger
                                className={classes.burger}
                                onClick={toggleNavbar}
                                opened={isNavbarOpen}
                                size="sm"
                            />
                            <span className={classes.fullLogo}>{logoFull}</span>
                        </div>
                    )}
                    <Stack className={classes.headerContent} spacing={0}>
                        <Group spacing="sm">
                            <Text
                                className={classes.subtitle}
                                fw={600}
                                size="md"
                                tt="uppercase"
                            >
                                {headerSubtitle}
                            </Text>
                            {headerBadge}
                        </Group>
                        <Group position="apart">
                            <Group spacing="xs">
                                <Title className={classes.title} size="h2">
                                    {headerTitle}
                                </Title>
                                {headerTitleAddon}
                            </Group>
                            <Group spacing="sm">{headerRightContent}</Group>
                        </Group>
                        {headerBottomContent}
                    </Stack>
                </Stack>
            </header>
            <Box className={classes.mainContent}>{children}</Box>
        </MantineAppShell>
    );
};

export default AppShell;
