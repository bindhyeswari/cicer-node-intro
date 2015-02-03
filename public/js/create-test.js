document.addEventListener('DOMContentLoaded', function () {
    var form = document.forms.frm_test;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    var jsonObject = {
        title: '',
        questions: []
    };

    // add question by handling the button click
    document.querySelector('#add_question').addEventListener('click', function () {
        var question = {
            question: form.question.value,
            options: []
        };

        for (var i = 1, len = 5; i < len; i++) {
            question.options.push(
                form['option' + i].value
            );
        }

        jsonObject.questions.push(question);
        updateView(jsonObject);
        form.reset();
        form.question.focus();
    })
});

function createElement(type, className, innerHTML, parent) {
    var element = document.createElement(type);
    element.className = className;
    element.innerHTML = innerHTML;
    if (typeof parent !== 'undefined') {
        parent.appendChild(element);
    }
    return element;
}


function updateView(obj) {
    // take the jsonObject as an input
    var allq_div = document.querySelector('#allquestions');
    allq_div.innerHTML = '';

    // loop over all the questions
    obj.questions.reverse().forEach(function (questionObj) {
        // run this code for each question object
        // create a question container
        var question_container = createElement('div', 'question-container', '', allq_div);

        // add a div with the question
        createElement('div', 'question', questionObj.question, question_container);

        // create a ul element to store all the answers
        var answer_container = createElement('ul', 'answer-container', '', question_container);

        // loop over all the answers and add li elements for them
        questionObj.options.forEach(function (answer) {
            createElement('li', 'answer', answer, answer_container);
        });

    });

}