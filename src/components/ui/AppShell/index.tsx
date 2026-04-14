import {
    Burger,
    Footer,
    Group,
    AppShell as MantineAppShell,
    AppShellProps as MantineAppShellProps,
    NavLinkProps as MantineNavLinkProps,
    Navbar,
    NavLink,
    Stack,
    Title
} from '@mantine/core';

import Icon from '../Icon';
import Text from '../Text';
import classes from './AppShell.module.css';

export interface AppShellProps extends MantineAppShellProps {
    activeLink: string;
    headerBadge?: React.ReactNode;
    headerBottomContent?: React.ReactNode;
    headerRightContent?: React.ReactNode;
    headerSubtitle?: string;
    headerTitle?: string; // TODO: revert back to required
    isFixedHeader?: boolean;
    isMobile: boolean;
    isNavbarOpen: boolean;
    manageProfileUrl?: string;
    navLinkItems: NavLinkItem[];
    openFeedback?: () => void;
    openHelp?: () => void;
    setActiveLink: (url: string) => void;
    signOut: () => void;
    toggleNavbar: () => void;
    userFirstName?: string;
    userProfilePicture?: string;
}

export interface NavLinkItem extends MantineNavLinkProps {
    healthIcon?: React.ReactNode;
    onClick?: () => void;
    url?: string;
}

const AppShell = ({ ...props }: AppShellProps) => {
    const {
        activeLink,
        children,
        headerBadge,
        headerBottomContent,
        headerRightContent,
        headerSubtitle,
        headerTitle,
        isFixedHeader = false,
        isMobile,
        isNavbarOpen,
        manageProfileUrl,
        navLinkItems,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        openFeedback,
        openHelp,
        setActiveLink,
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
                main: classes.appShellMain,
                root: classes.appShellRoot
            }}
            data-fixed={isFixedHeader}
            data-mobile={isMobile}
            footer={
                <Footer
                    className={classes.footer}
                    height={32}
                    withBorder={false}
                    zIndex={1}
                >
                    <a
                        className={classes.byLogo}
                        href="https://nexxt.in"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            src={`https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/powered_by_nexxt_intelligence_inca.png`}
                            width={200}
                        />
                    </a>
                </Footer>
            }
            layout={!isMobile ? 'alt' : 'default'}
            navbar={
                <Navbar
                    className={`${classes.navbar} ${
                        isNavbarOpen ? '' : classes.hidden
                    } `}
                    height={'auto'}
                    width={{ base: 85 }}
                >
                    <Navbar.Section>
                        <div
                            className={`${classes.iconLogo} ${
                                isMobile ? classes.hidden : ''
                            }`}
                        >
                            <img
                                height="30"
                                src={`https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/inca_blue_favicon.png`}
                                width="30"
                            />
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
            <header className={headerTitle ? classes.header : ''}>
                <Stack spacing={0}>
                    {isMobile && (
                        <div className={classes.mobileHeader}>
                            <Burger
                                className={classes.burger}
                                onClick={toggleNavbar}
                                opened={isNavbarOpen}
                                size="sm"
                            />
                            <span className={classes.fullLogo}>
                                <img
                                    height="26"
                                    src={`https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/inca_blue_favicon.png`}
                                    width="26"
                                />
                                <img
                                    height="32"
                                    src="https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/inca_logo_text.png"
                                    width="76"
                                />
                            </span>
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
                            <Title className={classes.title} size="h2">
                                {headerTitle}
                            </Title>
                            <Group spacing="sm">{headerRightContent}</Group>
                        </Group>
                        {headerBottomContent}
                    </Stack>
                </Stack>
            </header>
            {children}
        </MantineAppShell>
    );
};

export default AppShell;
