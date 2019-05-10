import $ from 'jquery';

$(function () {
  // export default function () {
    $(document).on('click', 'a, button, input[type="submit"]', function (e) {
  // $("a, button, input[type='submit']").click(function(e) {
  const element_a = $(this).htmlText;
  const element_input = $(this).text;

    const data = [{
        event: `Clicou no botão ${$(this).value} na página ${document.title}`,
        css: $(this).attr('class'),
        idElement: $(this).attr('id'),
        element: $(this).get(0).tagName.toLowerCase(),
        htmlText: $(this).text().trim(),
        pageUrl: $(document.location).attr('pathname'),
        pageTitle: $('title').text(),
        linkRedirect: $(this).attr('href'),
    }];
    //   mixpanel.track_links("Clicou no botão "+$(this).text().trim()+" na página "+document.title, data[0]);
      console.table(data[0]);
    // if $(this).currentTarget = a ? console.log(e.text) : console.log(e.value);;
    console.log(e);
    });
});

// // export default function () {
//   $(document).on('click', 'a, button, input[type="submit"]', function () {
//     const data = [{
//       event: `Clicou no botão ${$(this).text().trim()} na página ${document.title}`,
//       css: $(this).attr('class'),
//       idElement: $(this).attr('id'),
//       element: $(this).get(0).tagName.toLowerCase(),
//       htmlText: $(this).text().trim(),
//       pageUrl: $(document.location).attr('pathname'),
//       pageTitle: $('title').text(),
//       linkRedirect: $(this).attr('href'),
//     }];
//     // window.mixpanel.track_links(`Clicou no botão ${$(this).text().trim()} na página ${document.title}`, data[0]);
//     console.table(data[0]);
//   });
// // }
