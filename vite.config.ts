import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@rmt/assets', replacement: path.resolve(__dirname, 'src/assets') },
			{ find: '@rmt/routes', replacement: path.resolve(__dirname, 'src/routes/index.ts') },
			{ find: '@rmt/pages', replacement: path.resolve(__dirname, 'src/ui/components/pages/index.ts') },
			{ find: '@rmt/layout', replacement: path.resolve(__dirname, 'src/ui/components/layout/index.ts') },
			{ find: '@rmt/atoms', replacement: path.resolve(__dirname, 'src/ui/components/atoms/index.ts') },
			{ find: '@rmt/molecules', replacement: path.resolve(__dirname, 'src/ui/components/molecules/index.ts') },
			{ find: '@rmt/organisms', replacement: path.resolve(__dirname, 'src/ui/components/organisms/index.ts') },
		  ],
	  },
});
