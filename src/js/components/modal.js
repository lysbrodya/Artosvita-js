const modalHTML = `
<div class="modal-menu is-hidden" data-modal>
      <div class="modal">
        <button class="modal-btn" data-modal-close type="button">
          <svg class="modal-icon" width="18" height="18">
            <use href="/svg/icon-close.svg"></use>
          </svg>
        </button>
        <p class="form-title">ЗАПИС НА КУРС</p>
        <form class="modal-form">
          <label for="name" class="form-lable"
            ><input
              type="text"
              name="user_name"
              class="form-input"
              id="name"
              placeholder="Ваше ім'я"
              minlength="2"
              maxlength="12"
            />
          </label>
          <label for="last-name" class="form-lable"
            ><input
              type="text"
              name="last-name"
              class="form-input"
              id="last-name"
              placeholder="Ваше призвище"
              minlength="2"
              maxlength="12"
            />
          </label>
          <label for="phone" class="form-lable">
            <input
              type="tel"
              name="phone"
              class="form-input"
              id="phone"
              placeholder="Ваш номер телефону"
              minlength="9"
              maxlength="13"
            />
          </label>
          <label for="nikname" class="form-lable">
            <input type="text" name="nikname" class="form-input" id="nikname" placeholder="Ваш нікнєйм у Telegram" />
          </label>
          <label for="courses" class="form-lable">
            <select id="courses" name="courses" class="select">
              <option value="2d">Курс 2D композиції</option>
              <option value="art">Курс Академічного рисунку</option>
            </select></label
          >

          <label for="message" class="form-lable-textarea">
            <textarea
              class="form-textarea"
              rows="3"
              name="user_message"
              id="message"
              placeholder="Якщо маєте запитання, напишіть Ваше повідомлення!"
            ></textarea>
          </label>
          <label class="checkbox-label">
            <input class="checkbox" type="checkbox" name="user_agry" /><span class="checkbox-icon"></span>Я погоджуюсь з
            Умовами використання та політикою Конфіденційності Art Osvita</label
          >
          <!-- <label class="checkbox-label" for="user_agry">
            <input class="checkbox" type="checkbox" name="user_agry" id="user_agry" /><span class="text-radio"
              >Я погоджуюсь з Умовами використання та політикою Конфіденційності Art Osvita</span
            >
          </label> -->
          <button class="button modal-button" type="submit">Надіслати</button>
        </form>
      </div>
    </div>
`;

export function modal() {
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.querySelector("[data-modal]");
  const openModalBtn = document.querySelectorAll("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  if (!modal || !openModalBtn || !closeModalBtn) return;

  openModalBtn.forEach((btn) => {
    btn.addEventListener("click", toggleMenu);
  });
  closeModalBtn.addEventListener("click", toggleMenu);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) toggleMenu();
  });

  function toggleMenu() {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
}
