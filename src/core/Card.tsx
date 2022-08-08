/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, Interpolation, jsx } from "@emotion/react";

export interface CardProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    full?: boolean;
    cursor?: boolean;
    padding?: number;
    css?: Interpolation<any>;
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
                    ? {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          backgroundColor: "#181718",
                          color: "#FFFFFF",
                          width: "100vw",
                          height: "100vh",

                          "@media only screen and (max-width: 600px)": {
                              display: "flex",
                              flexDirection: "column",
                              width: "100vw",
                              height: "100vh",
                          },
                      }
                    : ""}
                ${cursor ? "cursor: pointer;" : ""}
            `}
        >
            <div
                className={className}
                css={css({
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: full ? "auto" : "7em",
                    height: full ? "auto" : "7em",
                    padding: padding ? padding : "7em",
                    background: "rgba(255, 255, 255, 0.20)",
                    border: "0.1em solid rgba(0, 0, 0, 0.15)",
                    borderRadius: "10px",

                    "@media only screen and (max-width: 600px)": {
                        width: "100%",
                        height: "100%",
                        borderRadius: "5px",
                        padding: "3em",
                    },
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

                                "@media only screen and (max-width: 600px)": {
                                    width: "50%",
                                    height: "0px",
                                    left: "calc(50% - 680px/2 - 334px)",
                                    top: "calc(50% - 0px/2 - 337px)",
                                    border: "2px solid var(--dividerColor)",
                                    marginTop: "2em",
                                },
                            })}
                        ></div>
                    </div>
                ) : null}
                {children}
            </div>
        </div>
    );
};
