import { defineConfig } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      favicons: [
        [16, "favicon-16x16.ico"],
        [32, "favicon-32x32.ico"],
        [48, "favicon-48x48.ico"],
        [64, "favicon.ico"]
      ]
    },
    maskable: {
      sizes: [512]
    },
    apple: {
      sizes: [60, 76, 120, 152, 180]
    }
  },
  images: [
    'public/logo.svg'
  ]
})
