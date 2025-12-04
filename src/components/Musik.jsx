import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = ({ src, audioRef, isPlaying, setIsPlaying }) => {
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.error("Autoplay blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={styles.container}>
      {/* Preload + loop */}
      <audio ref={audioRef} src={src} loop preload="auto" playsInline />
      <button onClick={togglePlay} style={styles.button}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 20,
    right: 20,
    zIndex: 999,
  },
  button: {
    background: "none",
    border: "none",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default MusicPlayer;
