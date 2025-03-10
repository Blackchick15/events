/*
 * Події.
 * - Створення і видалення слухачів
 * - Найменування колбеків для слухачів
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Силлочна ідентичність колбеків
 * - Обєкт події
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');



addListenerBtn.addEventListener('click', () => {
    console.log('Вішаєм слухача на цільову кнопку');
  
    targetBtn.addEventListener('click', onTagergetBtnClick);
  });
  
  removeListenerBtn.addEventListener('click', () => {
    console.log('Знімаю слухача події по цльовій кнопці');
  
    targetBtn.removeEventListener('click', onTagergetBtnClick);
  });
  
  function onTagergetBtnClick() {
    console.log('Клік по цільовій кнопці');
  }