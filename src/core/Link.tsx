/// <reference types="@emotion/react/types/css-prop" />
import React from "react";
import { css } from "@emotion/css";

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
				color: "rgb(0, 125, 179)",
				textDecoration: "none",

				"&:visited": {
					color: "rgb(0, 125, 179)",
					textDecoration: "none",
				},
			})}
		>
			{children}
		</a>
	);
};
