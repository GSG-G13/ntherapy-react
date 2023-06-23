import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BASEURL,
          changeOrigin: true,
          secure: false,
          ws: true,
          configure(proxy, options) {
            proxy.on('error', (err) => {
              console.log('err', err);
            });
          },

        },
      },
    },
  };
});
