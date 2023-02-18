export default class LocalStorage {
  constructor() {
    this.colorThemes = document.querySelectorAll('[name="theme"]');
  }

  loadThemeStorage() {
    LocalStorage.assignListener(this.colorThemes);
    LocalStorage.setTheme(this.colorThemes);
  }

  static storeTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  static assignListener(colorThemes) {
    colorThemes.forEach((themeOption) => {
      themeOption.addEventListener('click', () => {
        LocalStorage.storeTheme(themeOption.id);
      });
    });
  }

  static setTheme(colorThemes) {
    const activeTheme = localStorage.getItem('theme');
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
