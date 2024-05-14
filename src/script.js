
let rangeslider = document.getElementById("myRange");



rangeslider.oninput = function() {
    let val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
  
    $(this).css('background-image',
      '-webkit-gradient(linear, left top, right top, ' +
      'color-stop(' + val + ', var(--clr-Soft-Cyan)), ' +
      'color-stop(' + val + ', var(--clr-Light-Grayish-Blue))' +
      ')'
    );
  };

