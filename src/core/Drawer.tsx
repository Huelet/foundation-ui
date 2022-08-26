/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, jsx, keyframes } from "@emotion/react";
import { Portal } from "react-portal";
import { Close } from "@fdn-ui/icons-react";

export interface DrawerProps {
    heading: string;
    children: React.ReactNode;
    opened: boolean;
    onClose: () => void;
    location?: "left" | "right";
    width?: string;
    height?: string;
}

export const Drawer = ({
    heading,
    children,
    opened,
    onClose,
    location = "left",
    width = "300px",
    height = "100vh",
}: DrawerProps) => {
    return (
        <span>
            {opened && (
                <Portal>
                    <div
                        css={{
                            backgroundColor: "#181718",
                            position: "fixed",
                            zIndex: 9999,
                            top: 0,
                            bottom: 0,
                            right: location === "right" ? 0 : undefined,
                            left: location === "left" ? 0 : undefined,
                            width: width,
                            height: height,
                            color: "white",
                            border: "1px solid #000000",
                            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                            overflow: "auto",
                            animation: `${
                                opened
                                    ? keyframes`
                                0% {
                                    transform: translateX(-100%);
                                }
                                100% {
                                    transform: translateX(0%);
                                }
                            `
                                    : keyframes`
                                0% {
                                    transform: translateX(0%);
                                }
                                100% {
                                    transform: translateX(-100%);
                                }
                            `
                            } 0.3s ease-in-out`,
                        }}
                    >
                        <div
                            css={{
                                float: "right",
                                padding: "1em",
                                cursor: "pointer",
                            }}
                            onClick={onClose}
                        >
                            <Close fill="white" />
                        </div>
                        <div
                            css={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "1em",
                                borderBottom: "1px solid #ffffff",
                            }}
                        >
                            <h3
                                css={{
                                    margin: 0,
                                }}
                            >
                                {heading}
                            </h3>
                        </div>
                        <div css={{ padding: "1em" }}>{children}</div>
                    </div>
                </Portal>
            )}
        </span>
    );
};
