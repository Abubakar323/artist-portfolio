import "../styles/loader.css";

function Loader({ isFadingOut }) {
  return (
    <div className={`loader-screen ${isFadingOut ? "loader-fade-out" : ""}`}>
      <div className="loader-blob loader-blob-purple" />
      <div className="loader-blob loader-blob-cyan" />

      <div className="loadingspinner">
        <div id="square1" />
        <div id="square2" />
        <div id="square3" />
        <div id="square4" />
        <div id="square5" />
      </div>
    </div>
  );
}

export default Loader;
