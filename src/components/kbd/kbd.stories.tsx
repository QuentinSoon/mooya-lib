import type { Meta } from '@storybook/react';
import { KbdProps } from '.';
import { Kbd } from './kbd';

export default {
	title: 'Library/Kbd',
	component: Kbd,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Kbd>;

export const Default = (props: KbdProps) => (
	<Kbd keys={'command'} {...props}>
		K
	</Kbd>
);

export const MultiKbd = (props: KbdProps) => (
	<Kbd keys={['command', 'capslock']} {...props}>
		K
	</Kbd>
);
