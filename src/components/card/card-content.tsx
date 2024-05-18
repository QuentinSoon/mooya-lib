'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef } from 'react';
import './card.css';

export type CardContentProps = PropsWithChildren<{}>;

export type UseCardContentProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof CardContentProps
> &
	CardContentProps;

const CardContent = forwardRef<HTMLDivElement, UseCardContentProps>(
	({ children }, ref) => {
		return <div>{children}</div>;
	}
);
CardContent.displayName = 'CardContent';

export { CardContent };
