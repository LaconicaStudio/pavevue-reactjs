import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./certs/pavevue.loc-key.pem'),
      cert: fs.readFileSync('./certs/pavevue.loc.pem'),
    },
    host: 'pavevue.loc',
    port: 3000,
    cors: true,
  },
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// // https://vite.dev/config/
//    export default defineConfig({
//   plugins: [react()],
// })