/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
/** @jsx jsx */
import React from "react";
import { css, Interpolation, jsx } from "@emotion/react";

export interface FieldProps {
    name: string;
    value?: string;
    disabled?: boolean;
    error?: string;
    label?: string;
    onChange?: (value: string) => void;
    prefill?: string;
    padding?: number;
    icon?: React.ReactNode;
    css?: Interpolation<any>;
}

export const Field = ({
    name,
    value,
    disabled,
    label,
    error,
    onChange,
    prefill,
    padding,
    icon,
}: FieldProps) => {
    return (
        <div css={css({
            display: "flex",
            flexDirection: "column",
        })}>
            {label && <label htmlFor={name}>{label}</label>}
            <div
                css={css({
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#303245",
                    opacity: disabled ? 0.5 : 1,
                    cursor: disabled ? "not-allowed" : "text",
                    border: error ? "0.01em solid #ff0000" : undefined,
                    borderRadius: "12px",
                    padding: padding || "0.2em",
                    width: "100%",
                })}
            >
                {icon && (
                    <div
                        css={css({
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0.2em",
                        })}
                    >
                        {icon}
                    </div>
                )}
                <div
                    css={css({
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    })}
                >
                    <input
                        css={css({
                            marginTop: "1em",
                            backgroundColor: "#303245",
                            borderRadius: "12px",
                            border: 0,
                            margin: 0,
                            boxSizing: "border-box",
                            color: "#eee",
                            fontSize: "18px",
                            outline: 0,
                            width: "100%",
                            padding: padding || "0.2em",
                        })}
                        type="text"
                        name={name}
                        value={value}
                        onChange={() => onChange}
                        disabled={disabled}
                        placeholder={prefill}
                    />
                </div>
            </div>
            <div css={css({
                padding: "0.2em",
            })}>
                {error && (
                    <span
                        css={css({
                            color: "#ff0000",
                            fontSize: "12px",
                        })}
                    >
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
};
