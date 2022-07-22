/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

export interface CardProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    full?: boolean;
    cursor?: boolean;
    padding?: number;
}

export const Card = ({
    children,
    title,
    subtitle,
    className,
    full,
    cursor,
    padding,
}: CardProps) => {
    return (
        <div
            css={css`
                ${full
                    ? `
                        display: grid;
                        place-items: center;
                        background-color: #181718;
                        color: #FFFFFF;
                        width: 100vw;
                        height: 100vh;
                    `
                    : ""}
                ${cursor ? "cursor: pointer;" : ""}
            `}
        >
            <div
                css={css({
                    display: "flex",
                    flexDirection: "column",
                })}
            >
                <div
                    className={className}
                    css={css({
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: padding ? padding : "7em",
                        background: "rgba(255, 255, 255, 0.20)",
                        border: "0.1em solid rgba(0, 0, 0, 0.15)",
                        borderRadius: "10px",
                        transition: "0.6s",
                    })}
                >
                    {title ? (
                        <div>
                            <h2
                                css={css({
                                    fontSize: "3em",
                                })}
                            >
                                {title}
                            </h2>
                            {subtitle ? (
                                <h3
                                    css={css({
                                        fontSize: "1.5em",
                                    })}
                                >
                                    {subtitle}
                                </h3>
                            ) : null}
                            <div
                                css={css({
                                    width: "100%",
                                    height: "0px",
                                    left: "calc(50% - 689px/2 - 334px)",
                                    top: "calc(50% - 0px/2 - 337px)",
                                    border: "2px solid #605e5c",
                                    marginTop: "2em",
                                })}
                            ></div>
                        </div>
                    ) : null}
                    {children}
                </div>
            </div>
        </div>
    );
};
