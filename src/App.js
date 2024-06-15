import "./styles.css";
import Tabs from "./Tabs";

export default function App() {
  return (
    <div className="App">
      <h1>Custom Tabs</h1>
      <Tabs>
        <div title="Home">Custom Content for Home</div>
        <div title="About">Tab Content for About</div>
        <div title="Contact">Tabsss Content for Contact</div>
      </Tabs>
    </div>
  );
}
