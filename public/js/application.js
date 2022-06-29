document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputNum = event.target.sides.value;
    // console.log(inputNum);
    const res = await fetch('/', {
      method: 'POST',
      body: JSON.stringify({inputNum}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // event.target.sides.value = ''
    const myCompHtml = await res.text();
    // console.log(myCompHtml);
    document.querySelector('#die-container').innerHTML = myCompHtml;

  });
});


// PSEUDO-код:
// 1 - перехватить событие отправки формы
// 2 - предотвратить действие по умолчанию для этого события
// 3 - отправить AJAX-сообщение на сервер
// 4 - когда сообщение AJAX готово, отображаем новый бросок кубика
