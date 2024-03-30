
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: "json" };

export default [
  {
    input: 'src/export.js',
    output: {
      file: pkg.main,
      format: 'esm'
    },
    plugins: [
      babel({
        "exclude": 'node_modules/**',
        "babelHelpers": "bundled",
        "presets": [
          [
            "@babel/preset-react", {
              "runtime": "automatic"
            }
          ],
          "@babel/preset-env"
        ]
      }),
      terser()
    ],
    external: [
      'react',
      'react-dom'
    ]
  },
];
