$("#submit").on('click', function () {
    event.preventDefault();
    const person = {};
    const scores = [];
    scores.push($('#q1').val());
    scores.push($('#q2').val());
    scores.push($('#q3').val());
    scores.push($('#q4').val());
    scores.push($('#q5').val());
    scores.push($('#q6').val());
    scores.push($('#q7').val());
    scores.push($('#q8').val());
    scores.push($('#q9').val());
    scores.push($('#q10').val());
    person.name = $("#name").val();
    person.photo = $("#photo").val();
    person.scores = scores;
    console.log(person);
    $.post("/api/friends", person)
        .then(function (data) {
            console.log('success')
        });
});

Friends