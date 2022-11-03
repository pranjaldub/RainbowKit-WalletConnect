import { darkTheme, midnightTheme , lightTheme } from '@rainbow-me/rainbowkit'
import React from 'react'

const ChangeTheme = ({ changeThemeHandler }) => {
    const changetheme = (event) => {
        changeThemeHandler(event.target.value)
    }
    return (<>
    <label for="theme">Choose a theme:</label>

        <select name="theme" id="theme" onChange={changetheme}>
            <option value="lightTheme">light theme</option>
  <option value="darkTheme">dark theme</option>
  <option value="midnightTheme">midnight theme</option>

      </select>
    </>)
}

export default ChangeTheme