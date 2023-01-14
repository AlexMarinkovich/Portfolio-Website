const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks) {tablink.classList.remove("active-link")}
    for(tabcontent of tabcontents) {tabcontent.classList.remove("active-tab")}

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

const projectimages = document.getElementsByClassName("project-image")
const projectdescs = document.getElementsByClassName("project-desc")

function showproject(id){
    for(image of projectimages) {image.classList.remove("active-image")}
    for(desc of projectdescs) {desc.classList.remove("active-desc")}

    event.currentTarget.classList.add("active-image")
    document.getElementById(id).classList.add("active-desc")
}