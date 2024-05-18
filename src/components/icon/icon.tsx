'use client';

import { icons } from 'lucide-react';

export type IconProps = {
	name: keyof typeof icons;
	size?: number;
	color?: string;
};

export const Icon = ({ name, size, color, ...props }: IconProps) => {
	const LucideIcon = icons[name];

	if (!LucideIcon) {
		throw new Error(`Icon "${name}" not found`);
	}

	return <LucideIcon color={color} size={size} />;
};
