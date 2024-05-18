import type { Meta } from '@storybook/react';
import { Popover, PopoverContent, PopoverProps, PopoverTrigger } from '.';
import { Button } from '../button';

export default {
	title: 'Library/Popover',
	component: Popover,
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
} as Meta<typeof Popover>;

export const Default = (props: PopoverProps) => (
	<Popover {...props}>
		<PopoverTrigger>
			<Button color="basic" size="md" variant="solid">
				Test
			</Button>
		</PopoverTrigger>
		<PopoverContent>
			<ul className="">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</PopoverContent>
	</Popover>
);

export const Default2 = (props: PopoverProps) => (
	<Popover {...props}>
		<PopoverTrigger>
			<Button color="basic" size="md" variant="solid">
				Test
			</Button>
		</PopoverTrigger>
		<PopoverContent>
			<ul className="px-4 py-2.5 rounded-xl border min-w-10 bg-white">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</PopoverContent>
	</Popover>
);
