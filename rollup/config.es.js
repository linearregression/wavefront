import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    moduleName: 'wavefront',
    entry: './src/index.js',
    plugins: [babel({
            babelrc: false,
            exclude: 'node_modules/**'
        }),
        nodeResolve({
            jsnext: true,
            main: true
        })
    ],
    format: 'es',
    dest: './dist/wavefront.es.js'
};