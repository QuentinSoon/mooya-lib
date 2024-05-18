import { defineConfig } from 'tsup';

export default defineConfig({
	entryPoints: ['src/components/index.ts'],
	dts: true,
	clean: true,
	sourcemap: false,
});
