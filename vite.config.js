import path from 'path';
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
