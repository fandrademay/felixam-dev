'use client'

import { useTranslations } from "next-intl";
import styles from "../../../app/[locale]/themes/page.module.css";
import { useTheme } from 'next-themes'

function ThemeToggles() {
  const { setTheme } = useTheme()

  const t = useTranslations('ToggleThemeButton');

  const themeMapping: Record<string, string> = {
    'light': t.raw('light'),
    'dark': t.raw('dark'),
    'autumn': t.raw('autumn'),
    'azure': t.raw('azure'),
    'srcery': t.raw('srcery'),
  }

  return (
    <div>
      <div className={styles.settings_button}>
        {Object.entries(themeMapping).map(([key, value]) => (
          <a
            key={key}
            className={styles.major}
            onClick={() => {
              setTheme(key)
            }}
          >
            {value}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ThemeToggles