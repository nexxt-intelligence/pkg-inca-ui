import {
    Footer as MantineFooter,
    FooterProps as MantineFooterProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import classes from './Footer.module.css';

export type FooterProps = {
    height?: MantineFooterProps['height'];
} & Omit<StrictProps<MantineFooterProps>, 'children' | 'height'>;

const Footer = ({ ...props }: FooterProps) => {
    return (
        <MantineFooter
            className={classes.footer}
            height={16}
            withBorder={false}
            zIndex={1}
            {...props}
        >
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
        </MantineFooter>
    );
};

export default Footer;
