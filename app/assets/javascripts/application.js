// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require_tree .

// document.onload = function(){
//   mixpanel.track_links("a", "click link", {
//       "referrer": document.referrer
//     });
// }


//
// document.addEventListener("turbolinks:load", function() {
// // $(document).on('turbolinks:load', function() {
//     $("a, button, input[type='submit']").click(function(event) {
//       data = [{
//         "evento" : "Clicou no botão "+$(this).text().trim()+" na página "+document.title,
//         "css" : $(this).attr('class'),
//         "id_element" : $(this).attr('id'),
//         "element" : $(this).get(0).tagName.toLowerCase(),
//         "html_text" : $(this).text().trim(),
//         "page_url" : $(location).attr('pathname'),
//         "page_title" : $('title').text().trim(),
//         "link_redirect" : $(this).attr('href'),
//         "referrer": document.referrer
//       }]
//
//       // mixpanel.track_links("Clicou no botão "+$(this).text().trim()+" na página "+document.title, data[0]);
//       console.table(data[0]);
//     });
// });

// $(document).on('ready turbolinks:before-cache', function() {
//
// });


// document.addEventListener('turbolinks:load', function() {
//   $("a, button, input[type='submit']").click(function(event) {
//     data = [{
//       "evento" : "Clicou no botão "+$(this).text().trim()+" na página "+document.title,
//       "css" : $(this).attr('class'),
//       "id_element" : $(this).attr('id'),
//       "element" : $(this).get(0).tagName.toLowerCase(),
//       "html_text" : $(this).text().trim(),
//       "page_url" : $(location).attr('pathname'),
//       "page_title" : $('title').text().trim(),
//       "link_redirect" : $(this).attr('href'),
//       "referrer": document.referrer
//     }]
//
//     // mixpanel.track_links("Clicou no botão "+$(this).text().trim()+" na página "+document.title, data[0]);
//     console.clear();
//     console.table(data[0]);
//   });
// });
