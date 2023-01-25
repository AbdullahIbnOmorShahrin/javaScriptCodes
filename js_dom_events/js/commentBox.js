const btnPost = document.getElementById('btn-post');
btnPost.addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    const newComment = textArea.value;
    const newPTag = document.createElement('p');
    newPTag.innerText = newComment;

    const containerArea = document.getElementById('container-text');
    containerArea.appendChild(newPTag)

    textArea.value = '';

})