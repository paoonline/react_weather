var React = require('react');

var About = (props) => {
    return(
        <div>
            <h1 className="text-center page_title">About</h1>
            <p>This a weather react app</p>
            <p>Here are some of the tools I used</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - this was the
                    JavaScript Framework used
                </li>
                <li>
                <a href="https://openweathermap.org">Open Weather Map</a> - I used
                    Open weather map to search for weather data by city name
                </li>
            </ul>

        </div>
    )
}

module.exports = About;