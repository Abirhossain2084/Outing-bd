import HomeBanner from "./HomeBanner";
import HomeGuides from "./HomeGuides";
import HomePackages from "./HomePackages";
import HomeReview from "./HomeReview";
import HomeWinter from "./HomeWinter";

import MessengerCustomerChat from 'react-messenger-customer-chat';


const Home = () => {
  return (
    <div className="container mx-auto">

      <HomeBanner></HomeBanner>
      <HomePackages></HomePackages>
      <HomeWinter></HomeWinter>
      <HomeGuides></HomeGuides>
      <HomeReview></HomeReview>

      <div>
        
        <MessengerCustomerChat
          pageId="<PAGE_ID>"
          appId="7096416003712528"
          htmlRef="<REF_STRING>"
        />,
      </div>


    </div>
  );
};

export default Home;