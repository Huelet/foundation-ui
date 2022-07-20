/* eslint-disable no-unused-vars */
/// <reference types="@emotion/react/types/css-prop" />
import React from "react";
import { css, jsx } from "@emotion/react";

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
			css={css`
				color: rgb(0, 125, 179);
				text-decoration: none;

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
