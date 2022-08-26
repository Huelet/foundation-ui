/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, jsx, keyframes } from "@emotion/react";
import { Portal } from "react-portal";
import { Close } from "@fdn-ui/icons-react";

export interface ToastProps {
    heading: string;
    body: string;
    opened: boolean;
    onClose: () => void;
    type?: "success" | "error" | "warning" | "neutral";
    location?: "top" | "bottom-right";
    timeout?: number;
    icon?: React.ReactChild;
}

export const Toast = ({
    heading,
    body,
    opened,
    onClose,
    type = "neutral",
    location = "bottom-right",
    timeout,
    icon,
}: ToastProps) => {
    timeout
        ? setTimeout(() => {
              onClose();
          }, timeout)
        : null;

    return (
        <span>
            {opened && (
                <Portal>
                    <div
                        css={{
                            position: "fixed",
                            zIndex: 9999,
                            top: location === "top" ? "1em" : undefined,
                            bottom:
                                location === "bottom-right" ? "1em" : undefined,
                            right:
                                location === "bottom-right" ? "1em" : undefined,
                            left: location === "top" ? "50vw" : undefined,
                            background:
                                type === "success"
                                    ? "rgba(60, 97, 53, 0.73)"
                                    : type === "error"
                                    ? "rgba(255, 0, 0, 0.2)"
                                    : type === "neutral"
                                    ? "rgba(248, 255, 0, 0.2)"
                                    : "#000000",

                            border:
                                type === "success"
                                    ? "1px solid rgba(255, 255, 255, 0.125)"
                                    : type === "error"
                                    ? "1px solid rgba(255, 255, 255, 0.125)"
                                    : type === "neutral"
                                    ? "1px solid rgba(255, 255, 255, 0.125)"
                                    : "1px solid rgba(255, 255, 255, 0.125)",
                            backdropFilter: "blur(9px) saturate(200%)",
                            color: "white",
                            padding: "1em",
                            borderRadius: "0.5em",
                            boxShadow: "0 0 0.5em 0.5em rgba(0, 0, 0, 0.5)",
                            animation: `${
                                opened
                                    ? keyframes`
                                0% {
                                    opacity: 0;
                                    transform: translateY(1em);
                                }
                                100% {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            `
                                    : keyframes`
                                0% {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                                100% {
                                    opacity: 0;
                                    transform: translateY(1em);
                                }
                            `
                            } 0.5s ease-in-out`,
                        }}
                    >
                        <div css={{ float: "right", cursor: "pointer" }}>
                            <div
                                css={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: "1em",
                                }}
                            >
                                <Close fill="white" onClick={onClose} />
                            </div>
                        </div>
                        <div
                            css={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            {icon}
                            <div
                                css={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginLeft: "1em",
                                }}
                            >
                                <h3
                                    css={{
                                        margin: 0,
                                        fontSize: "1.5em",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {heading}
                                </h3>
                                <p
                                    css={{
                                        margin: 0,
                                        fontSize: "1em",
                                        fontWeight: "normal",
                                    }}
                                >
                                    {body}
                                </p>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </span>
    );
};
