require.config({
    baseUrl: "./js",
    paths: {
        zepto: "zepto",
        index: "index"
    }
})
require(["zepto", "index"])