const { spawn } = require("child_process");

class StartServerPlugin {
  constructor(options = {}) {
    this.command = options.command || "";
    this.args = options.args || [];
    this.once = options.once !== false;
    this.started = false;
    this.child = null;

    process.on("SIGINT", () => {
      console.log("退出中...");
      if (this.child) {
        this.child.on('close',(code)=>{
            console.log(`应用退出，退出码：${code}`);
        })
        this.child.kill();
      }else{
        process.exit();
      }
    });
  }
  /** @param {import('webpack').Compiler} compiler */
  apply(compiler) {
    compiler.hooks.done.tap("StartServerPlugin", () => {
      if (this.started) return;
      if (this.command) {
        this.child = spawn(this.command, this.args, {
          stdio: "inherit",
          shell: true,
        });
        this.child.on('error',(code)=>{
            console.log(`错误退出，错误码：${code}`);
        })
         this.child.on('close',(code)=>{
            console.log(`应用退出，退出码：${code}`);
        })
      }
      this.started = true;
    });
  }
}

module.exports = StartServerPlugin;
