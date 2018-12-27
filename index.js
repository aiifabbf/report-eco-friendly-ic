import "./auto-numbering"
// import marked from "marked"
import Vue from "vue/dist/vue"
// import text from "./main.md"
import bibitems from "./bibitems.json"
import images from "./*.png"

var app = new Vue({
    el: "#app",
    data: {
        // rendered: marked(text),
        bibitems: bibitems,
    }
})

window.app = app