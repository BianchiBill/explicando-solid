
const { exec } = require("child_process");

const files = [
    'examples/typescript/dip.example.ts',
    'examples/typescript/isp-example.ts',
    'examples/typescript/Isp-example.ts',
    'examples/typescript/ocp-example.ts',
    'examples/typescript/srp-example.ts',
    'examples/vanilla/dip.example.js',
    'examples/vanilla/isp-example.js',
    'examples/vanilla/Isp-example.js',
    'examples/vanilla/ocp-example.js',
    'examples/vanilla/srp-example.js',
];

(async () => {
    console.log('')
    for (const file of files) {
        exec(`yarn tsx ${file}`, (err, out) => {
            console.log(out);
        })
    }
})()
