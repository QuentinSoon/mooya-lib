import type { Meta } from '@storybook/react';
import { InputProps } from '.';
import { Input } from './input';

export default {
	title: 'Library/Input',
	component: Input,
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
} as Meta<typeof Input>;

export const Default = (props: InputProps) => (
	<Input id="test" placeholder="Entrez une adresse email" />
);

export const Variants = (props: InputProps) => (
	<div className="flex flex-col items-center gap-4">
		<Input id="fds" placeholder="Entrez une adresse email" variant="default" />
		<Input
			id="fsdfdsfsd"
			placeholder="Entrez une adresse email"
			variant="floating"
		/>
		<Input id="vcjk" placeholder="Entrez une adresse email" variant="ifta" />
	</div>
);
