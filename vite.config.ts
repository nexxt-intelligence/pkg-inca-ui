import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      fileName: (format) => `inca-ui.${format}.js`,
      formats: ['es', 'cjs'],
      name: 'inca-ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    },
    target: 'es2019'
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json')
    })
  ]
});
