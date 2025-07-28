import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json')
    })
  ],
  build: {
    target: 'es2019',
    lib: {
      entry: 'src/index.tsx',
      name: 'inca-ui',
      fileName: (format) => `inca-ui.${format}.js`,
      formats: ['es', 'cjs']
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
    }
  }
});
