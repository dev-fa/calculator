export default class LocalStorage {
  /* 'dfaca_' is a local storage key prefix. 
    Its to avoid key variable collisions in local storage. 
    dfaca = (d)ev-(f)(a) (c)alculator (a)pp */

  constructor() {
    this.colorThemes = document.querySelectorAll('[name="theme"]');
  }

  loadThemeStorage() {
    LocalStorage.assignListener(this.colorThemes);
    LocalStorage.setTheme(this.colorThemes);
  }

  static storeTheme(theme) {
    localStorage.setItem('dfaca_theme', theme);
  }

  static assignListener(colorThemes) {
    colorThemes.forEach((themeOption) => {
      themeOption.addEventListener('click', () => {
        LocalStorage.storeTheme(themeOption.id);
      });
    });
  }

  static setTheme(colorThemes) {
    const activeTheme = localStorage.getItem('dfaca_theme');
    colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        // eslint-disable-next-line no-param-reassign
        themeOption.checked = true;
      }
    });
    // fallback
    document.documentElement.className = activeTheme;
  }
}
