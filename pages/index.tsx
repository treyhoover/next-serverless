import React from 'react';
import Page from '../components/Page';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const slides = [
  'https://cdn.curiositystream.com/system/ProcessedImages/images/000/018/472/original/V2095_THOF_1920x1080_Ep1.jpg',
  'https://cdn.curiositystream.com/system/ProcessedImages/images/000/000/398/original/COP_BirthOfTheInternet_Rev1.jpg',
  'https://cdn.curiositystream.com/system/ProcessedImages/images/000/002/248/original/StoryHouse_PearlHarbor-IntoTheArizona.jpg',
  'https://cdn.curiositystream.com/system/ProcessedImages/images/000/011/804/original/MadFilms_ButterflyEffect_Ep1.jpg',
  'https://cdn.curiositystream.com/system/ProcessedImages/images/000/009/840/original/COP_PrescriptionNutrition_GreenRevolution.jpg',
  'https://cdn.curiositystream.com/system/ProcessedImages/images/000/013/118/original/COP_UnderwaterWonders_DevilsHole.jpg',
];

export default () => {
  const [scrollingLocked, setScrollingLocked] = React.useState(false);

  return (
    <Page>
      <header>
        <Navbar />
      </header>

      <main className="ph3">
        This is the home page!
        <Slider<string>
          id="slider"
          items={slides}
          className="mw-100 nowrap overflow-auto snap-x hide-scrollbar mv4"
          onScrollStop={() => {
            setScrollingLocked(false);

            console.log('unlocked', scrollingLocked);
          }}
        >
          {(slide, index, width) => (
            <div
              className="dib snap-align-start ph2"
              key={index}
              style={{
                width,
              }}
            >
              <img
                src={slide}
                style={{
                  height: width * (9 / 16),
                }}
              />
            </div>
          )}
        </Slider>
        <button
          onClick={e => {
            const sliderEl = document.getElementById('slider');
            const { scrollLeft, clientWidth } = sliderEl;
            const canScrollMore = scrollLeft > 0;

            if (scrollingLocked || !canScrollMore) return;

            setScrollingLocked(true);

            sliderEl.scroll({
              left: scrollLeft - clientWidth,
              behavior: 'smooth',
            });
          }}
        >
          {'<–'}
        </button>
        <button
          onClick={e => {
            const sliderEl = document.getElementById('slider');
            const { scrollLeft, clientWidth } = sliderEl;
            const canScrollMore = scrollLeft < clientWidth * 2;

            if (scrollingLocked || !canScrollMore) return;

            setScrollingLocked(true);

            sliderEl.scroll({
              left: scrollLeft + clientWidth,
              behavior: 'smooth',
            });
          }}
        >
          {'–>'}
        </button>
      </main>
    </Page>
  );
};
