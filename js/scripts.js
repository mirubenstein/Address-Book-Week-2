$(document).ready(function() {
  $("form#contact").submit(function(event) {

    var firstNameInp = $("#first-name").val();
    var lastNameInp = $("#last-name").val();
    var addressInp = $("#address").val();
    var contactObj = {};
    contactObj.first = firstNameInp;
    contactObj.last = lastNameInp;
    contactObj.address = addressInp;

    $("ul#contact-list").append("<li>" + contactObj.first +
                                ' ' + contactObj.last +
                                ' ' + contactObj.address + "</li>");

    $('li').last().click(function() {
      $('div#show-contacts').text('');
      $('div#show-contacts').append("<p>First Name: " + contactObj.first +
                                    "<br />Last Name: " + contactObj.last +
                                    "<br />Address: " + contactObj.address +
                                    "</p>");
    });
    event.preventDefault();
  });
});
