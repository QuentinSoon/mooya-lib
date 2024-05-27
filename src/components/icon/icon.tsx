'use client';

import { LucideProps, icons } from 'lucide-react';
import { SVGAttributes } from 'react';

export type IconProps = {
	name: keyof typeof icons;
} & LucideProps;

export type UseCardProps = Omit<SVGAttributes<SVGSVGElement>, keyof IconProps> &
	IconProps;

export const Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = icons[name];

	if (!LucideIcon) {
		throw new Error(`Icon "${name}" not found`);
	}

	return <LucideIcon {...props} />;
};
