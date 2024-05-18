'use client';

import { HTMLAttributes, PropsWithChildren, forwardRef, useMemo } from 'react';
import { KbdKey, kbdKeysLabelMap, kbdKeysMap } from '.';
import './kbd.css';

export type KbdProps = PropsWithChildren<{
	/**
	 * The key(s) to render in the Kbd component.
	 */
	keys?: KbdKey | KbdKey[];
}>;

export type UseKbdProps = Omit<HTMLAttributes<HTMLDivElement>, keyof KbdProps> &
	KbdProps;

const Kbd = forwardRef<HTMLDivElement, UseKbdProps>(
	({ children, keys }, ref) => {
		const keysToRender =
			typeof keys === 'string' ? [keys] : Array.isArray(keys) ? keys : [];

		const keysContent = useMemo(() => {
			return keysToRender.map((key) => (
				<abbr className="kbd-abbr" key={key} title={kbdKeysLabelMap[key]}>
					{kbdKeysMap[key]}
				</abbr>
			));
		}, [keysToRender]);

		return (
			<div className="kbd">
				{keysContent}
				<span>{children}</span>
			</div>
		);
	}
);
Kbd.displayName = 'Kbd';

export { Kbd };
