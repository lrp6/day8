var gulp = require("gulp")
var webserver = require("gulp-webserver")

var fs = require("fs")
var path = require("path")
var url = require("url")
var data = require("./data.json")
gulp.task("webserver", function() {
    gulp.src("./src/")
        .pipe(webserver({
            port: 3000,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname
                console.log(pathname)
                if (pathname == "/favicon.ico") {
                    res.end("")
                } else if (pathname == "/list") {
                    res.end(JSON.stringify(data))
                } else {
                    pathname = pathname == "/" ? "index.html" : pathname
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
                }

            }
        }))
})