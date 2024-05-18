import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { CheckboxProps } from '.';
import { Checkbox } from './checkbox';

export default {
	title: 'Library/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="flex items-center justify-center w-full h-full">
				<Story />
			</div>
		),
	],
} as Meta<typeof Checkbox>;

export const Default = (props: CheckboxProps) => <Checkbox {...props} />;

export const External = (props: CheckboxProps) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex flex-row  items-center gap-4">
			<Checkbox
				onChange={(e) => setOpen(!open)}
				checked={open}
				defaultChecked={open}
				{...props}
			/>
			{open ? 'open' : 'close'}
		</div>
	);
};

export const Sizes = (props: CheckboxProps) => (
	<div className="flex flex-row items-center gap-4">
		<Checkbox {...props} defaultChecked size="sm" />
		<Checkbox {...props} defaultChecked size="md" />
		<Checkbox {...props} defaultChecked size="lg" />
	</div>
);

export const Rounded = (props: CheckboxProps) => (
	<div className="flex flex-row items-center gap-4">
		<Checkbox {...props} defaultChecked rounded="full" />
		<Checkbox {...props} defaultChecked rounded="lg" />
		<Checkbox {...props} defaultChecked rounded="md" />
		<Checkbox {...props} defaultChecked rounded="sm" />
		<Checkbox {...props} defaultChecked rounded="none" />
	</div>
);

export const Colors = (props: CheckboxProps) => (
	<div className="flex flex-row items-center gap-4">
		<Checkbox {...props} defaultChecked color="basic" />
		<Checkbox {...props} defaultChecked color="berry" />
		<Checkbox {...props} defaultChecked color="paradiso" />
		<Checkbox {...props} defaultChecked color="foreground" />
	</div>
);
