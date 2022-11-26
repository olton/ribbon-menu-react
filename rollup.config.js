import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import css from "rollup-plugin-import-css";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'build/ribbon-menu.js',
            format: 'es'
        },
        external: id => /^react/.test(id),
        plugins: [
            nodeResolve(),
            css(),
            replace({
                'process.env.NODE_ENV': JSON.stringify( 'development' ),
                preventAssignment: true,
            }),
            commonjs(),
            babel({
                presets: ["@babel/preset-react"],
                babelHelpers: 'runtime',
                skipPreflightCheck: true
            }),
        ]
    },
]
