import type { ComponentType } from "react";

export type Path = "/" | "/quick-reply" | "/settings" | "/about";

export interface Route {
	path: Path;
	Component: ComponentType;
	children?: Route[];
	meta?: {
		icon?: string;
		title?: string;
		windowOptions?: WindowOptions;
	};
}