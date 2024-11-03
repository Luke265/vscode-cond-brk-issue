var arg0 = "test";
function use() {
    // just to prevent this global variable from beign removed
    // comment it out and run "npm run build", then conditional breakpoint will work
    arg0;
}
// when there already is a variable named "arg0", esbuild will rename argument to "arg02"
// and then conditional breakpoints will not trigger
function task(arg0: number, arg1: number) {
    console.log("Add conditional breakpoint here with condition `arg0 === 5`");
    console.log("Add simple breakpoint here", arg0, arg1);
}

task(5, 0);
use();
