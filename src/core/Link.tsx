import React from "react";
import { css } from "@emotion/core";

export interface LinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

export const Link = ({ to, children, className }: LinkProps) => {
    return (
        <a
            href={to}
            className={className}
            css={css({
                textDecoration: "none",
            })}
        >
            {children}
        </a>
    );
};
