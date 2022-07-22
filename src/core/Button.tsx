/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

export interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    chonky?: boolean;
    type?: "primary" | "secondary" | "gay" | "transparent";
}

export const Button = ({ children, text }: ButtonProps) => {
    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #7600ff;
                border-radius: 12px;
                color: #eee;
                cursor: pointer;
                font-size: 18px;
                height: 50px;
                margin-top: 38px;
                outline: 0;
                text-align: center;
                width: 100%;
            `}
        >
            {text ? <p>{text}</p> : children}
        </div>
    );
};
