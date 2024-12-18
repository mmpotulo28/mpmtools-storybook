import { ReactElement } from "react";
import { iVariant, iSize } from "../lockup/types";

export enum iOrientation {
	Landscape = "landscape",
	Portrait = "portrait",
}

export interface iCardProps {
	overline?: string;
	title: string;
	subtitle?: string;
	content: string | ReactElement;
	image?: {
		src: string;
		alt: string;
	};
	actions?: Array<{
		label: string;
		onClick: () => void;
		icon?: ReactElement;
	}>;
	orientation?: iOrientation;
	variant?: iVariant;
	size?: iSize;
}
