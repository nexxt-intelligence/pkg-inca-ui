import { Box, BoxProps as MantineBoxProps } from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import classes from './Footer.module.css';

export type FooterProps = Omit<StrictProps<MantineBoxProps>, 'children'>;

/**
 * Footer contents without a wrapping element, so `AppShell` can render them
 * inside `AppShell.Footer` without nesting two `<footer>` elements.
 */
export const FooterContent = () => {
    return (
        <>
            <div className={classes.links}>
                <a
                    href="https://www.nexxt.in/privacy"
                    rel="noreferrer"
                    target="_blank"
                >
                    Privacy
                </a>
                <a
                    href="https://www.nexxt.in/terms"
                    rel="noreferrer"
                    target="_blank"
                >
                    Terms
                </a>
            </div>
            <a
                className={classes.byLogo}
                href="https://nexxt.in"
                rel="noreferrer"
                target="_blank"
            >
                <img
                    src={`https://nexxt-inca-storage.s3.us-east-2.amazonaws.com/img/powered_by_nexxt_intelligence_inca.png`}
                />
            </a>
        </>
    );
};

const Footer = ({ ...props }: FooterProps) => {
    return (
        <Box className={classes.footer} component="footer" {...props}>
            <FooterContent />
        </Box>
    );
};

export default Footer;
