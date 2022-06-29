const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ title, die, roll }) {
  return (
    <Layout title={title}>
      <div className="container">
      3  <h1>Simplest Possible AJAX</h1>
        <p>This contrived app will simulate a roll of a n-sided die.</p>

        <form method="post" action="/rolls" id="formID">
          <p>
            <label htmlFor="sides">
              How many sides?
              <input id="sides" name="sides" type="number" placeholder="optional - default=6" />
            </label>
          </p>
          <p><input type="submit" value="Roll the Die" /></p>
        </form>

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

      </div>
    </Layout>
  );
};
