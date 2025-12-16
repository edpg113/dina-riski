import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MusicPlayer from "./components/Musik";
import Backsound from "./audio/backsound pernikahan.m4a";
import { useRef, useState } from "react";
import Prewed1 from "/couple/couple.jpg";
import Prewed2 from "/couple/couple2.jpg";
import Prewed3 from "/couple/couple3.jpg";
import Carousel from "./components/Carousel";

const foto = [Prewed1, Prewed2, Prewed3];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 120, // jarak scroll sebelum animasi aktif
      easing: "ease-in-out-cubic",
      once: true,
      startEvent: "wedding:open",
    });

    document.body.style.overflow = "hidden"; // Sembunyikan scroll saat di landing page
  }, []);

  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
  };

  const namaTamu = getQueryParam("to") || "Tamu Undangan";

  const openInvitation = () => {
    const invitationSection = document.querySelector(".start");
    invitationSection.style.marginTop = "-100vh"; // Geser bagian undangan ke atas

    // scroll
    document.body.style.overflow = "auto"; // Sembunyikan scroll

    // setelah layout kebuka, trigger init AOS
    requestAnimationFrame(() => {
      document.dispatchEvent(new Event("wedding:open"));
      window.scrollTo(0, 0);
      window.dispatchEvent(new Event("scroll"));
    });

    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Autoplay ditolak oleh browser:", err);
      });
      setIsPlaying(true); // Setel status pemutaran musik ke true
    }
  };

  return (
    <div className="App">
      {/* Landing */}
      <div className="start">
        <MusicPlayer
          src={Backsound}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <div className="bg-undangan">
          <div className="cover">
            <div className="container">
              <h3>The Wedding</h3>
              <div className="namaPengantin">
                <h1>Kinoy &amp; Dina</h1>
                <div className="kepada">
                  <p>Kamis, 01 Januari 2026</p>
                  <hr />
                  <p>Kepada Yth. Bapak/Ibu/Sdr/i</p>
                  <strong>{decodeURIComponent(namaTamu)}</strong>
                  <hr />
                </div>
              </div>
              <button onClick={openInvitation}>Buka Undangan</button>
            </div>
          </div>
        </div>
      </div>
      {/* Quotes */}
      <div className="quotes">
        <div className="bg-quotes">
          <div className="container2">
            <h1 data-aos="fade-up" data-aos-delay="400">
              Save Our Date
            </h1>
            <span data-aos="fade-up" data-aos-delay="600">
              01.01.2026
            </span>
            <h1
              className="namaPengantin2"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              Kinoy <span>&amp;</span> Dina
            </h1>
            <p data-aos="fade-up" data-aos-delay="800">
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa
              kasih dan sayang.”
              <br />
              (Q.S. Ar-Rum: 21)
            </p>
          </div>
        </div>
      </div>
      {/* Pengantin */}
      <div className="pengantin">
        <div className="bg-pengantin">
          <div className="container3" data-aos="fade-up">
            <h1 data-aos="fade-up" data-aos-delay="1300">
              Kedua Mempelai
            </h1>
            <div className="pengantin-container">
              <div className="pengantin-item">
                <div
                  className="bg-foto"
                  data-aos="fade-zoom-in"
                  data-aos-delay="800"
                >
                  <img className="foto" src="/couple/dina.jpg" alt="Wanita" />
                </div>
                <div
                  className="bg-foto"
                  data-aos="fade-zoom-in"
                  data-aos-duration="400"
                >
                  <img className="foto" src="/couple/kinoy.jpg" alt="Pria" />
                </div>
                <h2 data-aos="fade-up" data-aos-delay="200">
                  Kinoy
                </h2>
                <h3 data-aos="fade-up" data-aos-delay="400">
                  Muhammad Riski Maulana
                </h3>
                <p data-aos="fade-up" data-aos-delay="600">
                  Putra pertama dari Pasangan
                </p>
                <h3 data-aos="fade-up" data-aos-delay="700">
                  Bpk. Abdul Majid dan Ibu Sisti Nurazizah
                </h3>
              </div>
              <span>&</span>
              <div className="pengantin-item" data-aos="fade-up">
                <h2 data-aos="fade-up" data-aos-delay="200">
                  Dina
                </h2>
                <h3 data-aos="fade-up" data-aos-delay="400">
                  Dina Nur Rasidah
                </h3>
                <p data-aos="fade-up" data-aos-delay="600">
                  Putri pertama dari Pasangan
                </p>
                <h3 data-aos="fade-up" data-aos-delay="700">
                  Bpk. A. Nurjamil dan Rosmawati
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rangkaian Acara */}
      <div className="acara">
        <div className="bg-acara"></div>
        <div className="container4">
          <h1 data-aos="fade-up" data-aos-delay="100">
            Kinoy & Dina <br />
            Wedding
          </h1>
          <div className="acara-item" data-aos="fade-up" data-aos-delay="300">
            <h2>Akad Nikah</h2>
            <p>Kamis, 01 Januari 2026</p>
            <p>Pukul 08.00 - 09.00 WIB</p>
          </div>
          <div className="acara-item" data-aos="fade-up" data-aos-delay="330">
            <h2>Resepsi</h2>
            <p>Kamis, 01 Januari 2026</p>
            <p>Pukul 10.00 - 19.00 WIB</p>
          </div>
          <div className="acara-item" data-aos="fade-up" data-aos-delay="300">
            <h2>Lokasi</h2>
            <p>Villa Coklat</p>
            <p>Jl. Cisarua</p>
          </div>
          <button>
            <a
              href="https://maps.app.goo.gl/Sne5HWCBufsckFNu9?g_st=aw"
              target="_blank"
            >
              Buka Lokasi
            </a>
          </button>
        </div>
      </div>
      {/* Galery */}
      <div className="galery">
        <div className="bg-galery">
          <div className="container5">
            <h1 data-aos="fade-up" data-aos-delay="200">
              Galeri
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              "Cinta bukan tentang menemukan seseorang untuk hidup bersama, tapi
              tentang menemukan seseorang yang tak bisa kamu hidup tanpanya."
            </p>
            <div data-aos="zoom-in" data-aos-delay="600">
              <Carousel images={foto} autoPlayInterval={4000} />
            </div>
          </div>
        </div>
      </div>
      {/* Wedding Gift */}
      <div className="gift">
        <div className="bg-gift">
          <div className="container6">
            <h1 data-aos="fade-up" data-aos-delay="200">
              Wedding Gift
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              "Hadiah terbaik adalah kehadiranmu di hari bahagia kami. Namun
              jika ingin memberikan hadiah, kami menerima dengan senang hati."
            </p>
            <div className="icon-bank" data-aos="fade-up" data-aos-delay="600">
              <img src="/couple/dana.png" alt="Dana" />
              <div className="rekening">
                <h3>Dina</h3>
                <h3>083115825847</h3>
              </div>
            </div>
            <div className="icon-bank" data-aos="fade-up" data-aos-delay="600">
              <img src="/couple/seabank.webp" alt="Seabank" />
              <div className="rekening">
                <h3>Dina</h3>
                <h3>901030604550</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* penutup */}
      <div className="penutup">
        <div className="bg-penutup">
          <div className="container7">
            <h1 data-aos="fade-up" data-aos-delay="200">
              Terima Kasih
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
              kepada kami.
            </p>
            <p data-aos="fade-up" data-aos-delay="600">
              Atas kehadiran dan doa restunya kami ucapkan terima kasih.
            </p>
            <p data-aos="fade-up" data-aos-delay="800">
              Kami yang berbahagia
            </p>
            <h2 data-aos="fade-up" data-aos-delay="1000">
              Kinoy & Dina
            </h2>
            <div className="watermark">
              <a href="https://www.instagram.com/apiww.izz/">
                Undangan Digital by Rafi Mauludi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
