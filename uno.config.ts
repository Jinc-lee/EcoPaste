import presetRemToPx from "@unocss/preset-rem-to-px";
import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetRemToPx({
			baseFontSize: 4,
		}),
	],
	transformers: [
		transformerVariantGroup(),
		transformerDirectives({
			applyVariable: ["--uno"],
		}),
	],
	shortcuts: [
		[/^bg-(\d+)$/, ([, d]) => `bg-[var(--color-bg-${d})]`],
		[/^color-(\d+)$/, ([, d]) => `text-[var(--color-text-${d})]`],
	],
	theme: {
		colors: {
			primary: "var(--ant-blue-6)",
		},
	},
});