import "jquery-confirm"

function SendEmail () {
  var button = $("#email")
    // console.log(button.data('saved'));
    button.confirm({
      columnClass: 'col-md-4 col-md-offset-4',
      // boxWidth: '30%',
      useBootstrap: false,
      // icon: 'fa fa-spinner fa-spin',
      escapeKey: 'Ok',
      backgroundDismiss: true,
      title: 'Email',
      content: `<strong>hola@11once.de</strong>`,
      theme: 'modern',
      buttons: {
          Ok: {
              text: 'Ok',
              // action: function(){
              //     // window.scrollTo({
              //     //   top: 0,
              //     //   behavior: "smooth"
              //     // });
              // }
          },
        },
      type: 'blue'
    });
};


export { SendEmail };

function ShowPhoneNu () {
  var button = $("#phone")
    // console.log(button.data('saved'));
    button.confirm({
      columnClass: 'col-md-4 col-md-offset-4',
      // boxWidth: '30%',
      useBootstrap: false,
      // icon: 'fa fa-spinner fa-spin',
      escapeKey: 'Ok',
      backgroundDismiss: true,
      title: 'Phone',
      content: `<strong>+49 151 1577 6592</strong>`,
      theme: 'modern',
      buttons: {
          Ok: {
              text: 'Ok',
              // action: function(){
              //     // window.scrollTo({
              //     //   top: 0,
              //     //   behavior: "smooth"
              //     // });
              // }
          },
        },
      type: 'blue'
    });
};


export { ShowPhoneNu };

// function CopyToClipboard() {
//   /* Get the text field */
//   var copyText = document.getElementById("myInput");

//   /* Select the text field */
//   copyText.select();

//   /* Copy the text inside the text field */
//   document.execCommand("copy");

//   /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
// }
