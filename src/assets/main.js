$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2248257.json',
    dataType: 'jsonp',
    success: function(response) {
      $.each(response.courses.completed, function( k, v) {
        $('#badges').append('<div class="course"><h3>' + v.title + '</h3><img src="' + v.badge + '"><a href="' + v.url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
      });
    }
  });
});
