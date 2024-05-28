import { defineConfig, loadEnv } from 'vite'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import path from 'path'
import { globSync } from 'glob'
import autoprefixer from 'autoprefixer'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('vite.config.js', env)

  const tsArray = globSync('src/pages/**/*.ts')

  const htmlArray = globSync('src/pages/**/*.html')

  const createEntries = (filePathArray) => {
    const entries = {}
    filePathArray.forEach((filePath) => {
      const pathArray = filePath.split(path.sep).filter((e, i) => i > 1)
      const fileName = pathArray.map((e) => e.split('.')[0]).join('/')
      entries[fileName] = filePath
    })
    return entries
  }

  return {
    root: path.resolve(__dirname, 'src/pages'),
    base: './',
    publicDir: path.resolve(__dirname, 'src/public'),
    envDir: path.resolve(__dirname, ''),
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          ...createEntries(tsArray),
          ...createEntries(htmlArray)
        },
        output: {
          entryFileNames: 'assets/js/[name].js',
          chunkFileNames: 'assets/js/dev/[name].js',
          assetFileNames: (assetInfo) => {
            if (/\.css$/.test(assetInfo.name)) {
              return 'assets/css/[name].[ext]'
            }
            return 'assets/[name].[ext]'
          }
        }
      },
      css: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    },
    server: {
      port: 3000,
      host: true,
      strictPort: true,
      watch: {
        usePolling: true
      }
    },
    plugins: [
      ViteEjsPlugin(),
    ]
  }
})
