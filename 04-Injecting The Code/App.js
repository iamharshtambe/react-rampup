import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Header() {
   return (
      <>
         <div className="nav-bar">
            <h1>Virar Eats</h1>

            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Cart</li>
            </ul>
         </div>

         <Search />
      </>
   );
}

function Search() {
   return (
      <div className="search">
         <input type="text" placeholder="Search..."></input>
         <button>🔍</button>
      </div>
   );
}

const restroData = [
   {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
      info: {
         id: '116813',
         name: 'Pizza Hut',
         cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/676bd9cf-5bf1-47a8-bf8a-2d23f3b1b30f_116813.JPG',
         locality: 'Global City',
         areaName: 'Vasai East',
         costForTwo: '₹300 for two',
         cuisines: ['Pizzas'],
         avgRating: 4.1,
         parentId: '721',
         avgRatingString: '4.1',
         totalRatingsString: '5.0K+',
         sla: {
            deliveryTime: 28,
            lastMileTravel: 3.6,
            serviceability: 'SERVICEABLE',
            slaString: '25-30 mins',
            lastMileTravelString: '3.6 km',
            iconType: 'ICON_TYPE_EMPTY',
         },
         availability: {
            nextCloseTime: '2025-07-15 03:00:00',
            opened: true,
         },
         badges: {
            imageBadges: [
               {
                  imageId: 'Rxawards/_CATEGORY-Pizza.png',
                  description: 'Delivery!',
               },
            ],
         },
         isOpen: true,
         type: 'F',
         badgesV2: {
            entityBadges: {
               imageBased: {
                  badgeObject: [
                     {
                        attributes: {
                           description: 'Delivery!',
                           imageId: 'Rxawards/_CATEGORY-Pizza.png',
                        },
                     },
                  ],
               },
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: '50% OFF',
            subHeader: 'UPTO ₹100',
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
               mediaType: 'ADS_MEDIA_ENUM_IMAGE',
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
         restaurantOfferPresentationInfo: {},
         externalRatings: {
            aggregatedRating: {
               rating: '4.5',
               ratingCount: '4.3K+',
            },
            source: 'GOOGLE',
            sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
         },
         ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
         context: 'seo-data-9e4e3519-0971-4bac-a11a-97a353ffe817',
      },
      cta: {
         link: 'https://www.swiggy.com/city/mumbai/pizza-hut-global-city-vasai-east-rest116813',
         text: 'RESTAURANT_MENU',
         type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
   },
   {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
      info: {
         id: '51447',
         name: "McDonald's",
         cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/6737f805-40cb-4e01-bae9-f678c12fa70b_51447.JPG',
         locality: 'Virar Global City',
         areaName: 'Virar West',
         costForTwo: '₹400 for two',
         cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
         avgRating: 4.5,
         parentId: '630',
         avgRatingString: '4.5',
         totalRatingsString: '16K+',
         sla: {
            deliveryTime: 23,
            lastMileTravel: 3.6,
            serviceability: 'SERVICEABLE',
            slaString: '20-25 mins',
            lastMileTravelString: '3.6 km',
            iconType: 'ICON_TYPE_EMPTY',
         },
         availability: {
            nextCloseTime: '2025-07-15 02:45:00',
            opened: true,
         },
         badges: {
            imageBadges: [
               {
                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                  description: 'Delivery!',
               },
            ],
         },
         isOpen: true,
         type: 'F',
         badgesV2: {
            entityBadges: {
               imageBased: {
                  badgeObject: [
                     {
                        attributes: {
                           description: 'Delivery!',
                           imageId: 'Rxawards/_CATEGORY-Burger.png',
                        },
                     },
                  ],
               },
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: 'ITEMS',
            subHeader: 'AT ₹99',
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
               mediaType: 'ADS_MEDIA_ENUM_IMAGE',
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
         restaurantOfferPresentationInfo: {},
         externalRatings: {
            aggregatedRating: {
               rating: '--',
            },
         },
         ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
         context: 'seo-data-9e4e3519-0971-4bac-a11a-97a353ffe817',
      },
      cta: {
         link: 'https://www.swiggy.com/city/mumbai/mcdonalds-virar-global-city-virar-west-rest51447',
         text: 'RESTAURANT_MENU',
         type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
   },
   {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
      info: {
         id: '1011206',
         name: 'Burger King',
         cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/73ea4637-d989-48c0-b631-5e9b82cb5231_1011206.jpg',
         locality: 'Virar West',
         areaName: 'Kingston Court',
         costForTwo: '₹350 for two',
         cuisines: ['Burgers', 'American'],
         avgRating: 4.2,
         parentId: '166',
         avgRatingString: '4.2',
         totalRatingsString: '426',
         sla: {
            deliveryTime: 17,
            lastMileTravel: 1.8,
            serviceability: 'SERVICEABLE',
            slaString: '15-20 mins',
            lastMileTravelString: '1.8 km',
            iconType: 'ICON_TYPE_EMPTY',
         },
         availability: {
            nextCloseTime: '2025-07-15 00:00:00',
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: 'F',
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: '60% OFF',
            subHeader: 'UPTO ₹110',
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
               mediaType: 'ADS_MEDIA_ENUM_IMAGE',
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
         restaurantOfferPresentationInfo: {},
         externalRatings: {
            aggregatedRating: {
               rating: '--',
            },
         },
         ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
         context: 'seo-data-9e4e3519-0971-4bac-a11a-97a353ffe817',
      },
      cta: {
         link: 'https://www.swiggy.com/city/mumbai/burger-king-virar-west-kingston-court-rest1011206',
         text: 'RESTAURANT_MENU',
         type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
   },
   {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
      info: {
         id: '216647',
         name: 'NIC Ice Creams',
         cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/af8e392b-0191-404c-88ed-1c46e271cd28_216647.JPG',
         locality: 'Y K Nagar',
         areaName: 'Virar West',
         costForTwo: '₹120 for two',
         cuisines: ['Desserts', 'Ice Cream'],
         avgRating: 4.6,
         veg: true,
         parentId: '6249',
         avgRatingString: '4.6',
         totalRatingsString: '6.6K+',
         sla: {
            deliveryTime: 16,
            lastMileTravel: 2,
            serviceability: 'SERVICEABLE',
            slaString: '15-20 mins',
            lastMileTravelString: '2.0 km',
            iconType: 'ICON_TYPE_EMPTY',
         },
         availability: {
            nextCloseTime: '2025-07-15 00:00:00',
            opened: true,
         },
         badges: {
            imageBadges: [
               {
                  imageId: 'Rxawards/_CATEGORY-Ice-creams.png',
                  description: 'Delivery!',
               },
            ],
         },
         isOpen: true,
         type: 'F',
         badgesV2: {
            entityBadges: {
               imageBased: {
                  badgeObject: [
                     {
                        attributes: {
                           description: 'Delivery!',
                           imageId: 'Rxawards/_CATEGORY-Ice-creams.png',
                        },
                     },
                  ],
               },
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: 'ITEMS',
            subHeader: 'AT ₹124',
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
               mediaType: 'ADS_MEDIA_ENUM_IMAGE',
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
         restaurantOfferPresentationInfo: {},
         externalRatings: {
            aggregatedRating: {
               rating: '--',
            },
         },
         ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
         context: 'seo-data-9e4e3519-0971-4bac-a11a-97a353ffe817',
      },
      cta: {
         link: 'https://www.swiggy.com/city/mumbai/nic-ice-creams-y-k-nagar-virar-west-rest216647',
         text: 'RESTAURANT_MENU',
         type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
   },
   {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
      info: {
         id: '689936',
         name: 'Theobroma',
         cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/b8bf5115-a892-4477-a5db-3e5ea259c5c8_689936.JPG',
         locality: 'Cosmos Square',
         areaName: 'Virar',
         costForTwo: '₹400 for two',
         cuisines: ['Desserts'],
         avgRating: 4.6,
         parentId: '1040',
         avgRatingString: '4.6',
         totalRatingsString: '837',
         sla: {
            deliveryTime: 22,
            lastMileTravel: 3,
            serviceability: 'SERVICEABLE',
            slaString: '20-25 mins',
            lastMileTravelString: '3.0 km',
            iconType: 'ICON_TYPE_EMPTY',
         },
         availability: {
            nextCloseTime: '2025-07-15 02:00:00',
            opened: true,
         },
         badges: {
            imageBadges: [
               {
                  imageId: 'Rxawards/_CATEGORY-Desserts.png',
                  description: 'Delivery!',
               },
               {
                  imageId: 'newg.png',
                  description: 'Gourmet',
               },
            ],
         },
         isOpen: true,
         type: 'F',
         badgesV2: {
            entityBadges: {
               imageBased: {
                  badgeObject: [
                     {
                        attributes: {
                           description: 'Delivery!',
                           imageId: 'Rxawards/_CATEGORY-Desserts.png',
                        },
                     },
                     {
                        attributes: {
                           description: 'Gourmet',
                           imageId: 'newg.png',
                        },
                     },
                  ],
               },
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: 'ITEMS',
            subHeader: 'AT ₹49',
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
               mediaType: 'ADS_MEDIA_ENUM_IMAGE',
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
         restaurantOfferPresentationInfo: {},
         externalRatings: {
            aggregatedRating: {
               rating: '--',
            },
         },
         ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
         context: 'seo-data-9e4e3519-0971-4bac-a11a-97a353ffe817',
      },
      cta: {
         link: 'https://www.swiggy.com/city/mumbai/theobroma-cosmos-square-virar-rest689936',
         text: 'RESTAURANT_MENU',
         type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
   },
   {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
      info: {
         id: '722833',
         name: 'Chinese Wok',
         cloudinaryImageId: 'e0839ff574213e6f35b3899ebf1fc597',
         locality: 'Virar',
         areaName: 'Cosmos Square',
         costForTwo: '₹250 for two',
         cuisines: ['Chinese', 'Asian', 'Tibetan', 'Desserts'],
         avgRating: 4.2,
         parentId: '61955',
         avgRatingString: '4.2',
         totalRatingsString: '1.2K+',
         sla: {
            deliveryTime: 27,
            lastMileTravel: 3,
            serviceability: 'SERVICEABLE',
            slaString: '25-30 mins',
            lastMileTravelString: '3.0 km',
            iconType: 'ICON_TYPE_EMPTY',
         },
         availability: {
            nextCloseTime: '2025-07-15 01:00:00',
            opened: true,
         },
         badges: {
            imageBadges: [
               {
                  imageId: 'Rxawards/_CATEGORY-Chinese.png',
                  description: 'Delivery!',
               },
            ],
         },
         isOpen: true,
         type: 'F',
         badgesV2: {
            entityBadges: {
               imageBased: {
                  badgeObject: [
                     {
                        attributes: {
                           description: 'Delivery!',
                           imageId: 'Rxawards/_CATEGORY-Chinese.png',
                        },
                     },
                  ],
               },
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: 'ITEMS',
            subHeader: 'AT ₹129',
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
               mediaType: 'ADS_MEDIA_ENUM_IMAGE',
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
         restaurantOfferPresentationInfo: {},
         externalRatings: {
            aggregatedRating: {
               rating: '--',
            },
         },
         ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
         context: 'seo-data-9e4e3519-0971-4bac-a11a-97a353ffe817',
      },
      cta: {
         link: 'https://www.swiggy.com/city/mumbai/chinese-wok-virar-cosmos-square-rest722833',
         text: 'RESTAURANT_MENU',
         type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
   },
   {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
      info: {
         id: '445613',
         name: 'KFC',
         cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/e7ea2234-a576-4ebe-8382-1bbb1fe4694c_445613.JPG',
         locality: 'Virar West',
         areaName: 'Virar West',
         costForTwo: '₹400 for two',
         cuisines: ['Burgers', 'Fast Food', 'Rolls & Wraps'],
         avgRating: 4.2,
         parentId: '547',
         avgRatingString: '4.2',
         totalRatingsString: '2.6K+',
         sla: {
            deliveryTime: 26,
            lastMileTravel: 3,
            serviceability: 'SERVICEABLE',
            slaString: '25-30 mins',
            lastMileTravelString: '3.0 km',
            iconType: 'ICON_TYPE_EMPTY',
         },
         availability: {
            nextCloseTime: '2025-07-15 03:00:00',
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: 'F',
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: 'ITEMS',
            subHeader: 'AT ₹59',
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
               mediaType: 'ADS_MEDIA_ENUM_IMAGE',
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
         restaurantOfferPresentationInfo: {},
         externalRatings: {
            aggregatedRating: {
               rating: '4.4',
               ratingCount: '1.4K+',
            },
            source: 'GOOGLE',
            sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
         },
         ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
         context: 'seo-data-9e4e3519-0971-4bac-a11a-97a353ffe817',
      },
      cta: {
         link: 'https://www.swiggy.com/city/mumbai/kfc-virar-west-rest445613',
         text: 'RESTAURANT_MENU',
         type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
   },
   {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
      info: {
         id: '334574',
         name: 'Kwality Walls Ice Cream and More',
         cloudinaryImageId:
            'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/9ad85ada-13be-408d-b9db-57592f235780_334574.JPG',
         locality: 'Virar',
         areaName: 'Virar West',
         costForTwo: '₹300 for two',
         cuisines: ['Desserts', 'Ice Cream', 'Ice Cream Cakes'],
         avgRating: 4.2,
         veg: true,
         parentId: '582',
         avgRatingString: '4.2',
         totalRatingsString: '597',
         sla: {
            deliveryTime: 26,
            lastMileTravel: 3.7,
            serviceability: 'SERVICEABLE',
            slaString: '25-30 mins',
            lastMileTravelString: '3.7 km',
            iconType: 'ICON_TYPE_EMPTY',
         },
         availability: {
            nextCloseTime: '2025-07-15 00:00:00',
            opened: true,
         },
         badges: {
            imageBadges: [
               {
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                  description: 'pureveg',
               },
            ],
         },
         isOpen: true,
         type: 'F',
         badgesV2: {
            entityBadges: {
               imageBased: {
                  badgeObject: [
                     {
                        attributes: {
                           description: 'pureveg',
                           imageId: 'v1695133679/badges/Pure_Veg111.png',
                        },
                     },
                  ],
               },
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: '₹150 OFF',
            subHeader: 'ABOVE ₹449',
            discountTag: 'FLAT DEAL',
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
               mediaType: 'ADS_MEDIA_ENUM_IMAGE',
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
         restaurantOfferPresentationInfo: {},
         externalRatings: {
            aggregatedRating: {
               rating: '--',
            },
         },
         ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
         context: 'seo-data-9e4e3519-0971-4bac-a11a-97a353ffe817',
      },
      cta: {
         link: 'https://www.swiggy.com/city/mumbai/kwality-walls-ice-cream-and-more-virar-virar-west-rest334574',
         text: 'RESTAURANT_MENU',
         type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
   },
];

function RestroContainer() {
   return (
      <div className="restro-card-container">
         {restroData.map((restro) => (
            <RestroCard restroObj={restro} key={restro.info.id} />
         ))}
      </div>
   );
}

function RestroCard({ restroObj }) {
   const {
      cloudinaryImageId,
      name,
      locality,
      areaName,
      cuisines,
      avgRating,
      sla,
   } = restroObj?.info;

   return (
      <div className="restro-card">
         <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
         />
         <p>
            <b> {name}</b>
         </p>
         <p>
            {locality}, {areaName}
         </p>
         <p>{cuisines.join(', ')}</p>
         <p>{avgRating}</p>
         <p>{sla.deliveryTime} Minutes</p>
      </div>
   );
}

function App() {
   return (
      <div className="app">
         <Header />
         <RestroContainer />
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
