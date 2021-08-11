import React from 'react'
import './header.css'

const Header = props=> {
var dict= {
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July' ,
        '8': 'August',
        '9': 'Septemner',
        '10': 'October',
        '11': 'November',
        '12': 'December'

};

var date=(props.datestring)
date= date.split('/')

    return (
        <div className="date">
        <p> {dict[date[0]]} {date[1]} of {date[2]}</p>
        </div>
    )
}

export default Header
