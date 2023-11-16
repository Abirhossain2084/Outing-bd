import HomeBanner from "./HomeBanner";
import HomeGuides from "./HomeGuides";
import HomePackages from "./HomePackages";
import HomeReview from "./HomeReview";
import HomeWinter from "./HomeWinter";



const Home = () => {
    return (
        <div className="container mx-auto">
           
          <HomeBanner></HomeBanner>
          <HomePackages></HomePackages>
          <HomeWinter></HomeWinter>
          <HomeGuides></HomeGuides>
          <HomeReview></HomeReview>
      
      
        </div>
    );
};

export default Home;