import type { Meta } from '@storybook/react';
import { ModalProps } from '.';
import { Modal } from './modal';

export default {
	title: 'Library/Modal',
	component: Modal,
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
} as Meta<typeof Modal>;

export const Default = ({ open = true, setOpen = () => {} }: ModalProps) => (
	<Modal open={open} setOpen={setOpen} className="w-96">
		Coucou
	</Modal>
);
