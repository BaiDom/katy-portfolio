import "../Css/Music.css";

const Music = () => {
  return (
    <section className="music-section">
      <div className="page-container spotify">
        <iframe
          className="spotify-player"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/63wpGjuYtKMliedy9FjHMB?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Music;
