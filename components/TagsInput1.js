/* https://www.codingnepalweb.com/tags-input-box-html-javascript/ */

const ul = document.querySelector("#input_names_ul"),
input = document.querySelector("#input_names"),
tagNumb = document.querySelector("#remove_all_names span"),
removeBtn = document.querySelector("#remove_all_names_btn");

let maxTags = 20,
tags = ["Amy", "you?", "me?", "who?"];

countTags();
createTag();
input.addEventListener("keyup", addTag);

function countTags(){
    input.focus();
    tagNumb.innerText = maxTags - tags.length;
}

function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove_tag_seg(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
    });
    countTags();
}
/* end of functions used by both tagging boxes */

function remove_tag_seg(element, tag){
    let index  = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    deleteSegment(theWheel, tag);
    countTags();
}

function addTag(e){
    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < maxTags){
                tag.split(',').forEach(tag => {
                    tags.push(tag);
                    createTag();
                    addSegment(theWheel, e.target.value, tags.indexOf(tag));
                });
            }
        }
        e.target.value = "";
    }

}

removeBtn.addEventListener("click", () =>{
    tags.length = 0;
    theWheel.numSegments = 0;
    theWheel.draw();
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTags();
});