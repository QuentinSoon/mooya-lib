'use client';

import type { Meta } from '@storybook/react';
import Image from 'next/image';
import { CardContent, CardProps } from '.';
import { Card } from './card';

export default {
	title: 'Library/Card',
	component: Card,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	decorators: [(Story) => <Story />],
} as Meta<typeof Card>;

export const Default = (props: CardProps) => (
	<Card {...props}>
		<CardContent>
			<Image
				src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
				alt="A dog"
				width={400}
				height={200}
			/>
		</CardContent>
	</Card>
);
