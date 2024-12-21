import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Themeswitch() {

  let [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  let switchTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(theme)
  }, [theme])

  return (
    <>
      <abbr title="Theme switch Button">
        <button
          className='text-3xl duration-200'
          onClick={switchTheme}
        >{theme == 'light' ? <CiLight /> : <MdDarkMode />}
        </button>
      </abbr>
    </>
  )
}

export default Themeswitch