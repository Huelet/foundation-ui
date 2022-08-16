/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import type { SerializedStyles } from "@emotion/react";

export interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    css?: SerializedStyles;
    chonky?: boolean;
    icon?: React.ReactChild;
    type?: "primary" | "secondary";
    width?: number;
    full?: boolean;
}

export const Button = ({
    children,
    text,
    chonky,
    icon,
    type,
    width,
    full,
}: ButtonProps) => {
    return (
        <div
            css={css`
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-direction: row;
                background: ${type === "primary" ? "#7600ff" : "transparent"};
                border-radius: ${type === "primary" ? "12px" : "5px"};
                border: ${type === "primary" ? "none" : "1px solid #7600ff"};
                color: #eee;
                cursor: pointer;
                font-size: 18px;
                height: 50px;
                margin-top: ${chonky ? "0" : "10px"};
                padding-left: ${width ? undefined : "1.5em"};
                padding-right: ${width ? undefined : "1.5em"};
                outline: 0;
                width: ${width ? `${width}em` : full ? "100%" : "auto"};

                &:hover {
                    background: ${type === "primary"
                        ? "#6300D6"
                        : "rgba(0, 0, 0, 0.1)"};
                }
            `}
        >
            {icon}
            {text ? (
                <p
                    css={css`
                        font-size: 1.2em;
                        font-weight: 700;
                    `}
                >
                    {text}
                </p>
            ) : (
                children
            )}
        </div>
    );
};
