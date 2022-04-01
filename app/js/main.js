  const burgerBtn = document.querySelector('.burger-btn');
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelector('.modal-btn');
  const orderBtn = document.querySelector('.order__btn');
  const nav = document.querySelector('.nav');
  const body = document.querySelector('.body');
  const headerInner = document.querySelector('.header__inner');
  const headerBottom = document.querySelector('.header__bottom');
  // console.log(orderBtn);

  function addElemet() {
    if (innerWidth <= 768) {
      headerInner.insertBefore(nav, headerInner.firstElementChild)
    } else {
      headerBottom.append(nav)
    }
  }
  addElemet();

  burgerBtn.addEventListener('click', function () {
    this.classList.toggle('burger-btn--active');
    body.classList.toggle('body--hidden');
    headerInner.classList.toggle('header__inner--visible')
  })

  window.addEventListener('resize', function (e) {
    addElemet();
  })

  orderBtn.addEventListener('click', function () {
    modal.classList.toggle('modal--visible');
    body.classList.toggle('body--hidden');
  })

  modal.addEventListener('click', function (e) {
    console.log(e.target.classList);
    if (e.target.classList == 'modal__btn' || e.target.classList[0] == 'modal') {
      modal.classList.remove('modal--visible');
      body.classList.remove('body--hidden');
    }
  })