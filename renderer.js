function go() {

let input = document.getElementById("urlInput").value.trim()

if(input.includes(".") && !input.includes(" ")){

let url = input

if(!url.startsWith("http")){
url = "https://" + url
}

window.open(url,"_blank")

}else{

let search="https://www.google.com/search?q="+encodeURIComponent(input)

window.open(search,"_blank")

}

}