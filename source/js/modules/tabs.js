const buttonTabs = document.querySelectorAll('[data-tab]');
const contentTabs = document.querySelectorAll('[data-content]');

const toggleTabs = () => {
  if (contentTabs[0]) {
    deleteAttribute();
    setAttribute(buttonTabs[0], contentTabs[0]);

    for (let i = 0; i < buttonTabs.length; i++) {
      buttonTabs[i].addEventListener('click', () => {
        deleteAttribute();
        setAttribute(buttonTabs[i], contentTabs[i]);
      });
    }
  }
};

const setAttribute = (buttonTab, contentTab) => {
  buttonTab.setAttribute(['data-tab-active'], '');
  contentTab.setAttribute(['data-tab-content-active'], '');
};

const deleteAttribute = () => {
  for (let i = 0; i < buttonTabs.length; i++) {
    buttonTabs[i].removeAttribute(['data-tab-active']);
    contentTabs[i].removeAttribute(['data-tab-content-active']);
  }
};

export {toggleTabs};
