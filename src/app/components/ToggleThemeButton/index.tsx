// 'use client'

// import { useTheme } from '@designcise/next-theme-toggle';
// import Image from 'next/image';


// import { useTranslations } from 'next-intl';


// export default function ToggleThemeButton() {
//   const { toggleTheme } = useTheme()
//   const t = useTranslations('ToggleThemeButton')

//   return (
//     <div className={styles.settings_button}>
//       <a className={styles.major} onClick={toggleTheme}>
//           <Image className={styles.inverting} src="/images/icons/theme.svg" 
//                   width={20} height={20} alt="Change Theme"/>
//             {t('content')}
//       </a>
//     </div>
//   );
// }

'use client'

import styles from "../../../app/[locale]/themes/page.module.css";
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ThemeToggles() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  // The active theme is not available on the server.
  // If you have styling that is conditionally applied based on the active-theme,
  // you have to await the mounted state before rendering the active theme.
  useEffect(() => setMounted(true), [])

  const themeMapping: Record<string, string> = {
    'light': 'Light',
    'dark': 'Dark',
    'autumn': 'Autumn',
    'azure': 'Azure',
    'srcery': 'Srcery'
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