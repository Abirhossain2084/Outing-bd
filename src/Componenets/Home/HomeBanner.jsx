import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const HomeBanner = () => {
  return (
    <section className='px-4'>
       <div className="relative z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90"></div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={1000}
        bullets={false}
      >
        <div data-src="https://i.ibb.co/VMfQNmd/shomitro-kumar-ghosh-f-Urr-Q4y-ENI-unsplash.jpg">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="font-bold text-center text-6xl text-[#87C342] opacity-80"></p>
          </div>
        </div>
        <div data-src="https://i.ibb.co/txh2G1W/mamun-srizon-qay3l-NDSHzc-unsplash.jpg">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className="text-white text-lg p-4 opacity-80"></p>
          </div>
        </div>
        <div data-src="https://i.ibb.co/86tw1V4/md-zahid-hasan-joy-Hfcyr-Ss-A51-E-unsplash.jpg">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className="text-white text-lg p-4 opacity-80"></p>
          </div>
        </div>
      </AutoplaySlider>
    </div>
    </section>
   
  );
};

export default HomeBanner;
