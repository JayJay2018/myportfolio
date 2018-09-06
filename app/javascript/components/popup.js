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
      title: 'Shit looking',
      content: `Dude, I am serious.`,
      theme: 'modern',
      buttons: {
          Ok: {
              text: 'Fuckoff',
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
