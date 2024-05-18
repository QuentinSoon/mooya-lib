import type { Meta } from '@storybook/react';
import { DropdownSeparator } from '.';
import { Button } from '../button';
import { MenuColorProps, MenuSizeProps } from '../menu';
import { Dropdown, DropdownProps } from './dropdown';
import { DropdownContent } from './dropdown-content';
import { DropdownItem } from './dropdown-item';
import { DropdownTrigger } from './dropdown-trigger';

export default {
	title: 'Library/Dropdown',
	component: Dropdown,
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
} as Meta<typeof Dropdown>;

export const Default = (props: DropdownProps) => {
	const color: MenuColorProps = 'basic';
	const size: MenuSizeProps = 'sm';
	return (
		<div className="flex flex-row items-center gap-4">
			<Dropdown {...props}>
				<DropdownTrigger>
					<Button color="basic" size="md" variant="solid">
						Test
					</Button>
				</DropdownTrigger>
				<DropdownContent variant="solid" size={size} color={color}>
					<DropdownItem>Item 1</DropdownItem>
					<DropdownItem>Item 2</DropdownItem>
					<DropdownItem>Item 3</DropdownItem>
				</DropdownContent>
			</Dropdown>
			<Dropdown {...props}>
				<DropdownTrigger>
					<Button color="basic" size="md" variant="solid">
						Test
					</Button>
				</DropdownTrigger>
				<DropdownContent variant="outline" size={size} color={color}>
					<DropdownItem>Item 1</DropdownItem>
					<DropdownItem>Item 2</DropdownItem>
					<DropdownItem>Item 3</DropdownItem>
				</DropdownContent>
			</Dropdown>
			<Dropdown {...props}>
				<DropdownTrigger>
					<Button color="basic" size="md" variant="solid">
						Test
					</Button>
				</DropdownTrigger>
				<DropdownContent variant="light" size={size} color={color}>
					<DropdownItem>Item 1</DropdownItem>
					<DropdownItem>Item 2</DropdownItem>
					<DropdownItem>Item 3</DropdownItem>
				</DropdownContent>
			</Dropdown>
			<Dropdown {...props}>
				<DropdownTrigger>
					<Button color="basic" size="md" variant="solid">
						Test
					</Button>
				</DropdownTrigger>
				<DropdownContent variant="flat" size={size} color={color}>
					<DropdownItem>Item 1</DropdownItem>
					<DropdownItem>Item 2</DropdownItem>
					<DropdownItem>Item 3</DropdownItem>
				</DropdownContent>
			</Dropdown>
			<Dropdown {...props}>
				<DropdownTrigger>
					<Button color="basic" size="md" variant="solid">
						Test
					</Button>
				</DropdownTrigger>
				<DropdownContent variant="faded" size={size} color={color}>
					<DropdownItem>Item 1</DropdownItem>
					<DropdownItem>Item 2</DropdownItem>
					<DropdownItem>Item 3</DropdownItem>
				</DropdownContent>
			</Dropdown>
		</div>
	);
};

export const LogMenu = (props: DropdownProps) => (
	<Dropdown {...props}>
		<DropdownTrigger>
			<Button color="basic" size="md" variant="solid">
				Test
			</Button>
		</DropdownTrigger>
		<DropdownContent variant="flat" size="md" color="basic">
			<DropdownItem className="font-medium">Inscription</DropdownItem>
			<DropdownItem className="font-medium">Connexion</DropdownItem>
			<DropdownSeparator />
			<DropdownItem>Louer mon logement</DropdownItem>
			<DropdownItem>Trouver un logement</DropdownItem>
			<DropdownItem>Aide</DropdownItem>
		</DropdownContent>
	</Dropdown>
);

export const LoggedMenu = (props: DropdownProps) => (
	<Dropdown {...props}>
		<DropdownTrigger>
			<Button color="basic" size="md" variant="solid">
				Test
			</Button>
		</DropdownTrigger>
		<DropdownContent variant="flat" size="md" color="basic">
			<DropdownItem className="font-medium">Profile</DropdownItem>
			<DropdownItem className="font-medium">Compte</DropdownItem>
			<DropdownItem className="font-medium">Obtenir de l`aide</DropdownItem>
			<DropdownSeparator />
			<DropdownItem>Français (FR)</DropdownItem>
			<DropdownItem>€ EUR</DropdownItem>
			<DropdownSeparator />
			<DropdownItem>Parrainer un hôte</DropdownItem>
			<DropdownItem color="poppy">Déconnexion</DropdownItem>
		</DropdownContent>
	</Dropdown>
);
