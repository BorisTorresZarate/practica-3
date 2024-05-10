
import React from 'react'

export function Buttons ({ setPercentage, percentage }) {
  const buttonsList = [5, 10, 15, 25, 50]
  return (
    <ul>
      {
        buttonsList.map(button =>
          <li key={button} id={`percentage-${button}`}>
            <button
              type="button"
              name='percentage'
              className={`percentage-button ${percentage === button && 'active'}`}
              value={button} onClick={setPercentage}>
              {button}%</button>
          </li>
        )
      }
      <li>
        <input
          type="number"
          name='percentage'
          placeholder="Custom"
          id="custom-percentage-button"
          className="percentage-button"
          onChange={setPercentage}
        />
      </li>
    </ul>
  )
}