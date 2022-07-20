import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
      '@c/': `${resolve(__dirname, 'src/components')}/`,
    },
  },
  plugins: [
    react(),
    Unocss(),
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
})
