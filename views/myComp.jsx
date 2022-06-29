const React = require('react');
const Layout = require('./Layout');
const Home = require('./Home');

module.exports = function myComp({ die, roll }) {
  return (
    <div id="die-container">
      {die
        && (
          <div className="die">
            <span className="roll">
              {roll}
            </span>
          </div>
        )}
    </div>
  )
}
