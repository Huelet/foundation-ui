/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import type { Interpolation } from "@emotion/react";

export interface LinkProps {
    to: string;
    children: React.ReactNode;
    css?: Interpolation<any>;
    className?: string;
    animation?: boolean;
}

export const Link = ({ to, children, className }: LinkProps) => {
    return (
        <a
            href={to}
            className={className}
            css={css`
                color: rgb(0, 125, 179);
                text-decoration: none;

                &:hover {
                    color: rgb(0, 125, 179);
                    text-decoration: underline;
                }

                &:visited {
                    color: rgb(0, 125, 179);
                    text-decoration: none;
                }
            `}
        >
            {children}
        </a>
    );
};
