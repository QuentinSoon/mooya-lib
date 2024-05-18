import type { Meta } from '@storybook/react';
import { Navbar, NavbarCenter, NavbarLeft, NavbarProps, NavbarRight } from '.';

export default {
	title: 'Library/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [(Story) => <Story />],
} as Meta<typeof Navbar>;

export const Default = (props: NavbarProps) => (
	<Navbar>
		<NavbarLeft>Left</NavbarLeft>
		<NavbarCenter>Center</NavbarCenter>
		<NavbarRight>Right</NavbarRight>
	</Navbar>
);
