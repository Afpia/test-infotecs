import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			components: path.resolve(__dirname, 'src/components')
		}
	},
	plugins: [react()]
})
