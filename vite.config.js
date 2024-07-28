import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
/* import fs from 'fs'; */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  base: '/node_fs98_front_VolodymyrKozel',
  /*   server: {
    https: {
      key: fs.readFileSync('./localhost.key'),
      cert: fs.readFileSync('./localhost.crt'),
    },
  }, */
});
