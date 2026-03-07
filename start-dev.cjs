// Start script for Maximus website dev server
// Uses exec (like command-center) to avoid Windows spawn issues
const { exec } = require('child_process');
const path = require('path');

const nodeDir = path.dirname(process.execPath);
const env = { ...process.env, PATH: `${nodeDir};${process.env.PATH || ''}` };

const child = exec('npx vite --host --port 5174', {
  env,
  cwd: __dirname,
  maxBuffer: 50 * 1024 * 1024,
});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
child.on('exit', (code) => process.exit(code || 0));
