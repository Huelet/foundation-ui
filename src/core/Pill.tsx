/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

export interface PillProps {
    children: React.ReactNode;
    type: "primary" | "secondary" | "transparent";
}

export const Pill = ({ children, type }: PillProps) => {
    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 0.5em 1em;
                border-radius: 5rem;
                cursor: pointer;
                box-sizing: border-box;
                user-select: none;
                width: 5.5em;
                height: 1em;
                
                background-color: ${type === "primary" ? "#7600ff" : type === "secondary" ? "#1ed760" : "rgb(255, 255, 255)"};
            `}
        >
            {children}
        </div>
    );
};
