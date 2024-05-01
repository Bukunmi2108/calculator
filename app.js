//select text display
const text = document.querySelector('.text');

//select buttons
const btns = document.querySelectorAll('.b');

//set values
let tx ='';
//select each button dataset
btns.forEach(
  function(btn) {
    btn.addEventListener('click', function (e) {
      const id = e.currentTarget.dataset.id;
      if (id != 'C' && id != '=') {
        tx = tx + id;
        text.textContent = tx;
      } else if(id == 'C') {
        tx = '';
        text.textContent = tx;
      } else if(id == '=') {
        tx = eval(tx);
        text.textContent = tx;
      }

    })
  }
)