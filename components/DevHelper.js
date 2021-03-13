const DevHelper = (props) => (
  <div className="dev-helper">
    <h3>Dev Helper</h3>
    <h4>Pages</h4>
    <ul>
      <li>
        <a href="/">Index/Start</a>
      </li>
      <li>
        <a href="/create">Create Multisig</a>
      </li>
      <li>
        <a href="/multi/cosmos1fjrcosmosDUMMYADDRESSqwpsvcrskv80wj82h">
          View Multisig
        </a>
      </li>
      <li>
        <a href="/multi/cosmos1fjrcosmosDUMMYADDRESSqwpsvcrskv80wj82h/transaction/kjas-q981-asda-143d">
          View/Sign Transaction
        </a>
      </li>
    </ul>
    <style jsx>{`
      .dev-helper {
        position: fixed;
        bottom: 0;
        right: 0;
        background: darkseagreen;
        padding: 1em;
      }

      ul {
      }
      li {
        margin-bottom: 0.5em;
      }
      a {
        color: white;
      }
    `}</style>
  </div>
);

export default DevHelper;