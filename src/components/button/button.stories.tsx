import type { Meta } from '@storybook/react';
import { ButtonProps } from '.';
import { Button } from './button';

export default {
	title: 'Library/Button',
	component: Button,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Button>;

export const Default = (props: ButtonProps) => (
	<Button {...props}>Button</Button>
);

export const Loading = (props: ButtonProps) => (
	<Button {...props} loading>
		Loading
	</Button>
);

export const Variants = (props: ButtonProps) => (
	<div className="flex flex-row items-center gap-4">
		<Button {...props} variant="solid">
			Solid
		</Button>
		<Button {...props} variant="outline">
			Outline
		</Button>
		<Button {...props} variant="light">
			Light
		</Button>
		<Button {...props} variant="ghost">
			Ghost
		</Button>
		<Button {...props} variant="flat">
			Flat
		</Button>
		<Button {...props} variant="faded">
			Faded
		</Button>
	</div>
);

export const Sizes = (props: ButtonProps) => (
	<div className="flex flex-row items-center gap-4">
		<Button {...props} size="sm">
			Small
		</Button>
		<Button {...props} size="md">
			Medium
		</Button>
		<Button {...props} size="lg">
			Large
		</Button>
	</div>
);

export const Rounded = (props: ButtonProps) => (
	<div className="flex flex-row items-center gap-4">
		<Button {...props} rounded="full">
			Full
		</Button>
		<Button {...props} rounded="lg">
			Large
		</Button>
		<Button {...props} rounded="md">
			Medium
		</Button>
		<Button {...props} rounded="sm">
			Small
		</Button>
		<Button {...props} rounded="none">
			None
		</Button>
	</div>
);

export const Colors = (props: ButtonProps) => (
	<div className="flex flex-row items-center gap-4">
		<Button {...props} color="basic">
			Basic
		</Button>
		<Button {...props} color="berry">
			Berry
		</Button>
		<Button {...props} color="paradiso">
			Paradiso
		</Button>
		<Button {...props} color="foreground">
			Foreground
		</Button>
	</div>
);

export const FullWidth = (props: ButtonProps) => (
	<Button {...props} fullWidth>
		Full Width
	</Button>
);

export const StartContent = (props: ButtonProps) => (
	<Button
		{...props}
		startContent={
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				className="h-full"
			>
				<path d="M5 9v6" />
				<path d="M9 9h3V5l7 7-7 7v-4H9V9z" />
			</svg>
		}
	>
		StartContent
	</Button>
);

export const EndContent = (props: ButtonProps) => (
	<Button
		{...props}
		endContent={
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				className="h-full"
			>
				<path d="M5 9v6" />
				<path d="M9 9h3V5l7 7-7 7v-4H9V9z" />
			</svg>
		}
	>
		EndContent
	</Button>
);

export const ContentFullWidth = (props: ButtonProps) => (
	<Button
		{...props}
		fullWidth
		contentFullWidth
		startContent={
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				className="h-full"
			>
				<path d="M5 9v6" />
				<path d="M9 9h3V5l7 7-7 7v-4H9V9z" />
			</svg>
		}
		endContent={
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				className="h-full"
			>
				<path d="M5 9v6" />
				<path d="M9 9h3V5l7 7-7 7v-4H9V9z" />
			</svg>
		}
	>
		Full Width
	</Button>
);

export const CustomStyles = (props: ButtonProps) => (
	<Button
		{...props}
		className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
	>
		Custom Styles
	</Button>
);
