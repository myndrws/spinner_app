/* https://www.codingnepalweb.com/tags-input-box-html-javascript/ */

const ul2 = document.querySelector("#input_things_ul"),
input2 = document.querySelector("#input_things"),
tagNumb2 = document.querySelector("#remove_all_things span"),
removeBtn2 = document.querySelector("#remove_all_things_btn");

let maxTags2 = 20,
tags2 = ["doc1", "doc2", "doc3", "doc4"];

countTags2();
createTag2();
input2.addEventListener("keyup", addTag2);

function countTags2(){
    input2.focus();
    tagNumb2.innerText = maxTags2 - tags2.length;
}

function createTag2(){
    ul2.querySelectorAll("#input_things_ul li").forEach(li => li.remove());
    tags2.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove_tag_seg2(this, '${tag}')"></i></li>`;
        ul2.insertAdjacentHTML("afterbegin", liTag);
    });
    countTags2();
}

function remove_tag_seg2(element, tag){
    let index  = tags2.indexOf(tag);
    tags2 = [...tags2.slice(0, index), ...tags2.slice(index + 1)];
    element.parentElement.remove();
    deleteSegment(theWheel2, tag);
    countTags2();
}

function addTag2(e2){
    if(e2.key == "Enter"){
        let tag2 = e2.target.value.replace(/\s+/g, ' ');
        if(tag2.length > 1 && !tags2.includes(tag2)){
            if(tags2.length < maxTags2){
                tag2.split(',').forEach(tag2 => {
                    tags2.push(tag2);
                    createTag2();
                    addSegment(theWheel2, e2.target.value, tags2.indexOf(tag2));
                });
            }
        }
        e2.target.value = "";
    }

}

removeBtn2.addEventListener("click", () =>{
    tags2.length = 0;
    theWheel2.numSegments = 0;
    theWheel2.draw();
    ul2.querySelectorAll("#input_things_ul li").forEach(li => li.remove());
    countTags2();
});