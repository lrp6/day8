var xhr = new XMLHttpRequest()
xhr.open("GET", "/list")
xhr.send()
xhr.onload = function(e) {
    var data = JSON.parse(e.target.responseText)
    console.log(data)
}