import {
    AppShell as MantineAppShell,
    AppShellProps as MantineAppShellProps,
    Header,
    Navbar,
    NavLink,
    NavLinkProps as MantineNavLinkProps,
    Footer,
    Burger
} from '@mantine/core';
import classes from './AppShell.module.css';
import Icon from '../Icon';

export interface AppShellProps extends MantineAppShellProps {
    navLinkItems: NavLinkItem[];
    activeLink: string;
    setActiveLink: (url: string) => void;
    isMobile: boolean;
    isNavbarOpen: boolean;
    toggleNavbar: () => void;
    signOut: () => void;
    openFeedback: () => void;
    openHelp: () => void;
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
        navLinkItems,
        activeLink,
        setActiveLink,
        isMobile,
        isNavbarOpen,
        toggleNavbar,
        signOut,
        openHelp,
        userFirstName,
        userProfilePicture,
        children
    } = props;

    const mobileStyles = isMobile ? classes.hidden : '';

    const navLinkBottomItems = [
        {
            label: 'Help',
            onClick: openHelp,
            icon: <Icon type="IconHelp" size="md" />
        },
        {
            label: userFirstName ? userFirstName : 'Profile',
            onClick: () => setActiveLink('/manage-profile'),
            icon: userProfilePicture ? (
                <span className={classes.userProfilePictureContainer}>
                    <img
                        src={userProfilePicture}
                        className={classes.userProfilePicture}
                    />
                </span>
            ) : (
                <Icon type="IconUserCircle" size="md" />
            )
        },
        {
            label: 'Logout',
            onClick: signOut,
            icon: <Icon type="IconLogout" size="md" />
        }
    ];

    const renderNavLinks = (item: NavLinkItem[]) => {
        return item.map(
            ({ label, disabled, icon, healthIcon, url, onClick }) => (
                <NavLink
                    key={label}
                    classNames={{
                        root: classes.navLinkRoot,
                        icon: classes.navLinkIcon,
                        label: classes.navLinkLabel,
                        body: classes.navLinkBody
                    }}
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
                    label={label}
                    active={url ? activeLink === url.split('?')[0] : undefined}
                    disabled={disabled}
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
            layout={!isMobile ? 'alt' : 'default'}
            navbarOffsetBreakpoint={isNavbarOpen ? '' : 'md'}
            classNames={{
                root: classes.appShellRoot,
                main: classes.appShellMain
            }}
            navbar={
                <Navbar
                    className={`${classes.navbar} ${
                        isNavbarOpen ? '' : classes.hidden
                    }`}
                    width={{ base: 85 }}
                    height={'auto'}
                >
                    <Navbar.Section>
                        <div className={`${classes.iconLogo} ${mobileStyles}`}>
                            <img
                                width="30"
                                height="30"
                                src={`https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/inca_blue_favicon.png`}
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
            header={
                <Header
                    height={{ base: 64, md: 0 }}
                    className={`${classes.header} ${
                        isMobile ? '' : classes.hidden
                    }`}
                    p="sm"
                >
                    <Burger
                        opened={isNavbarOpen}
                        onClick={toggleNavbar}
                        size="md"
                    />
                    <span className={classes.fullLogo}>
                        <img
                            width="30"
                            height="30"
                            src={`https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/inca_blue_favicon.png`}
                        />
                        <img
                            width="85"
                            height="35"
                            src="https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/inca_logo_text.png"
                        />
                    </span>
                </Header>
            }
            footer={
                <Footer
                    height={32}
                    className={classes.footer}
                    withBorder={false}
                    zIndex={1}
                >
                    <a
                        className="by-logo"
                        target="_blank"
                        rel="noreferrer"
                        href="https://nexxt.in"
                    >
                        <img
                            width={200}
                            src={`https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/powered_by_nexxt_intelligence_inca.png`}
                        />
                    </a>
                </Footer>
            }
        >
            {children}
        </MantineAppShell>
    );
};

export default AppShell;
