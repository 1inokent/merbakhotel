import React from 'react';
import './App.css';

import YMap from './сomponents/Map';

import HeroHeader from './сomponents/Header';
import RoomsSectionMobile from './сomponents/RoomsSectionMobile';
import RoomSectionDesktop from './сomponents/RoomSectionDesktop';

import Layout from './сomponents/Layout';

import './styles/fonts.css';
import './styles/animated-link.css';

const ROOM_1_IMG_ARRAY = [
  'https://i.sutochno.ru/vWbw7x03dmNzt9wCeKJQEh_Nz-E5oBtGVyk_4vrnbv8/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTYvNzMvNjJiMWY1ZWQ1MTFmZC5qcGc.webp',
  'https://i.sutochno.ru/oey9Va40pvza1cd_DR5l6NV_Z_BGaN6TUAppHfCo6W4/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTYvNzMvNjJiMWY3YjVhZjg4ZS5qcGc.webp',
  'https://i.sutochno.ru/guNj1nnrfoqy_M1uMvV7BVm9UlS8kWR8QInwkBQHgoA/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTYvNzMvNjJiMWY3NjM2ODY0NS5qcGc.webp',
  'https://i.sutochno.ru/WmR8N35KoSaKpfbh2igSgy8XQGsxl5lNxt8kXd9NKxw/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTYvNzMvNjJiMWY3OGZkYzA5Zi5qcGc.webp',
  'https://i.sutochno.ru/kQYzjGu0PxLkrS0kjV4zXaUWdKBMiTp0p0VXZDFLSp8/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTYvNzMvNjJiMWY4MGQ4MGU3OS5qcGc.webp',
];

const ROOM_2_IMG_ARRAY = [
  'https://i.sutochno.ru/knusL1mfpeVxUH018MFPNhctm5x-kxEYyyhy990COug/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTkvOTMvNjJiNDJlZDhkYjBjZS5qcGc.webp',
  'https://i.sutochno.ru/jl4kyTR9WV6jt-a9mme4Jd7SQpOMawyd_Xr5YcLpecE/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTkvOTMvNjJiNDM3NDI5ODZmMC5qcGc.webp',
  'https://i.sutochno.ru/sLvs2T9DIEtWDwwPDh2D6S21b_s9ON6rLlEVWi3CBV8/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTkvOTMvNjJiNDJlZjRjMTg5MS5qcGc.webp',
  'https://i.sutochno.ru/qtBcz7Eo5i7gMz9emYwt06XeMAjVSVgASqa2SAjX-YE/fit/1920/1080/no/1/czM6Ly9zdGF0aWMuc3V0b2Nobm8ucnUvZG9jL2ZpbGVzL29iamVjdHMvMS8xNTkvOTMvNjJiNDMwMzE2ZTI4Ni5qcGc.webp',
];

export default function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const listener = window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 768);
    });
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  React.useEffect(() => {
    var caruselScrollAnimationElements = document.querySelectorAll(
      '.carusel__scroll-animation'
    );

    function caruselScrollAnimation(entrise, observer) {
      entrise.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'rotate(0) scale(1)';
          observer.unobserve(entry.target);
        }
      });
    }

    var observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    var observer = new IntersectionObserver(
      caruselScrollAnimation,
      observerOptions
    );

    caruselScrollAnimationElements.forEach(function (element) {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="App">
      <Layout>
        <HeroHeader title="Mer Bak" />
        <div className="carusel__scroll-animation">
          {isMobile ? (
            <RoomsSectionMobile rooms={[ROOM_1_IMG_ARRAY, ROOM_2_IMG_ARRAY]} />
          ) : (
            <>
              <RoomSectionDesktop
                rooms={[ROOM_1_IMG_ARRAY, ROOM_2_IMG_ARRAY]}
                descriptionRoom={''}
              />
            </>
          )}
          <YMap />
        </div>
      </Layout>
    </div>
  );
}
