import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const partnerImages = [
    '/src/assets/images/partners/1.jpg',
    '/src/assets/images/partners/3.jpg',
    '/src/assets/images/partners/3.png',
    '/src/assets/images/partners/4.jpg',
    '/src/assets/images/partners/5.jpg',
    '/src/assets/images/partners/6.png',
    '/src/assets/images/partners/7.png',
    '/src/assets/images/partners/8.png',
    '/src/assets/images/partners/2.jpg'
  ];

  const services = [
    { icon: '/src/assets/images/icon-services/building.gif', title: 'إدارة الأملاك' },
    { icon: '/src/assets/images/icon-services/scales.gif', title: 'التقييم والتثمين العقاري' },
    { icon: '/src/assets/images/icon-services/promotion.gif', title: 'التسويق العقاري' },
    { icon: '/src/assets/images/icon-services/legal.gif', title: 'توثيق العقود الإلكترونية' },
    { icon: '/src/assets/images/icon-services/strategy.gif', title: 'الدراسات والإستشارات العقارية' },
    { icon: '/src/assets/images/icon-services/tax.gif', title: 'إدارة الضريبة' }
  ];

  const blogPosts = [
    {
      image: 'https://nufouth.com/uploads/posts/1740403957.jpg',
      title: 'التسويق البصري في العقارات',
      category: 'إدارة الأملاك',
      date: '10 يناير 2025'
    },
    {
      image: 'https://nufouth.com/uploads/posts/1740403957.jpg',
      title: 'التسويق البصري في العقارات',
      category: 'إدارة الأملاك',
      date: '10 يناير 2025'
    },
    {
      image: 'https://nufouth.com/uploads/posts/1740403957.jpg',
      title: 'التسويق البصري في العقارات',
      category: 'إدارة الأملاك',
      date: '10 يناير 2025'
    }
  ];

  const customerReviews = [
    {
      text: 'فريق العمل مميز ونسعى إلى استمرار الشراكة مع نفوذ التطوير، ونتمنى لهم دائماً التوفيق والنجاح',
      name: 'د خالد بن محمد الغامدي',
      position: 'رئيس مجلس إدارة جمعية البهاق الخيرية'
    },
    {
      text: 'فريق العمل مميز ونسعى إلى استمرار الشراكة مع نفوذ التطوير، ونتمنى لهم دائماً التوفيق والنجاح',
      name: 'د خالد بن محمد الغامدي',
      position: 'رئيس مجلس إدارة جمعية البهاق الخيرية'
    },
    {
      text: 'فريق العمل مميز ونسعى إلى استمرار الشراكة مع نفوذ التطوير، ونتمنى لهم دائماً التوفيق والنجاح',
      name: 'د خالد بن محمد الغامدي',
      position: 'رئيس مجلس إدارة جمعية البهاق الخيرية'
    },
    {
      text: 'فريق العمل مميز ونسعى إلى استمرار الشراكة مع نفوذ التطوير، ونتمنى لهم دائماً التوفيق والنجاح',
      name: 'د خالد بن محمد الغامدي',
      position: 'رئيس مجلس إدارة جمعية البهاق الخيرية'
    },
    {
      text: 'فريق العمل مميز ونسعى إلى استمرار الشراكة مع نفوذ التطوير، ونتمنى لهم دائماً التوفيق والنجاح',
      name: 'د خالد بن محمد الغامدي',
      position: 'رئيس مجلس إدارة جمعية البهاق الخيرية'
    }
  ];

  return (
    <section className="tabs py-5 my-5">
      <div className="container position-relative px-5">
        <div className="__skeleton bg-blob position-absolute d-none d-md-block" style={{left: '75%', top: '0%'}}>
          <img src="/src/assets/images/blobs/blob5.svg" loading="lazy" width="260px" height="260px" className="blob-graph" alt="" />
        </div>
        <div className="__skeleton bg-blob position-absolute d-none d-md-block" style={{left: '0%', top: '10%'}}>
          <img src="/src/assets/images/blobs/blob5.svg" loading="lazy" width="260px" height="260px" className="blob-graph" alt="" />
        </div>
        <div className="text-center mb-5">
          <h5 className="text-gray-2 fw-bolder text-shadow underline-center">نفوذ التطوير</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('tab1')}
                  type="button" 
                  role="tab"
                >
                  عن الشركة
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('tab2')}
                  type="button" 
                  role="tab"
                >
                  مجالات العمل
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('tab3')}
                  type="button" 
                  role="tab"
                >
                  الأخبار والمقالات
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('tab4')}
                  type="button" 
                  role="tab"
                >
                  آراء العملاء
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              {/* Tab 1: About Company */}
              <div className={`tab-pane tab_1 fade ${activeTab === 'tab1' ? 'show active' : ''}`} role="tabpanel">
                <div className="row py-4">
                  <div className="col-12 col-md-6 d-flex align-items-center">
                    <div>
                      <h5 className="fw-bold text-gray-2">نفوذ التطوير للعقارات وإدارة الأملاك</h5>
                      <p className="text-gray-1 fs-6">
                        شركة رائدة في مجال إدارة الأملاك والعقارات، نقدم خدمات متكاملة وحلول مبتكرة لعملائنا الكرام. 
                        نسعى لتحقيق أعلى معايير الجودة والاحترافية في جميع خدماتنا.
                      </p>
                      <div className="d-flex gap-2 flex-wrap">
                        <button className="btn btn-main-dark rounded-main">تواصل معنا</button>
                        <button className="btn btn-outline-main rounded-main">خدماتنا</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row py-4">
                      <h5 className="text-center fw-bold text-gray-2 mb-3">شركاء النجاح</h5>
                      <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                          320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                          },
                        }}
                      >
                        {partnerImages.map((image, index) => (
                          <SwiperSlide key={index} className="d-flex align-items-center">
                            <img src={image} loading="lazy" width="100%" alt="" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tab 2: Work Areas */}
              <div className={`tab-pane tab_2 fade ${activeTab === 'tab2' ? 'show active' : ''}`} role="tabpanel">
                <div className="row gy-3">
                  {services.map((service, index) => (
                    <div key={index} className="col-6 col-sm-4">
                      <div className="card border-0 pb-3 shadow cursor-pointer">
                        <div className="card-body d-flex flex-column align-items-center">
                          <div className="__skeleton w-50 p-0 p-sm-4">
                            <img src={service.icon} loading="lazy" className="w-100" alt="" />
                          </div>
                          <div className="mt-2 text-center">
                            <span className="fw-bold text-secondary">{service.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tab 3: News & Articles */}
              <div className={`tab-pane tab_3 fade ${activeTab === 'tab3' ? 'show active' : ''}`} role="tabpanel">
                <div className="row gy-3">
                  {blogPosts.map((post, index) => (
                    <div key={index} className="col-6 col-sm-4">
                      <div className="blog card border-0 pb-3 shadow cursor-pointer">
                        <div className="__skeleton p-4">
                          <img src={post.image} loading="lazy" className="card-img-top card-img-top rounded" alt="..." />
                        </div>
                        <div className="card-body pt-0 px-4">
                          <p className="blog-text card-text fw-bolder fs-7 text-secondary-700 border-4 p-2 p-sm-3 border-info border-start">{post.title}</p>
                          <div className="d-flex justify-content-between mt-3">
                            <div>
                              <span className="badge fs-8 fw-normal badge-yellow me-1 mb-1">{post.category}</span>
                            </div>
                            <div>
                              <span className="fs-8 text-gray-1">{post.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="d-flex justify-content-center">
                    <a href="/blog" className="main_button mt-5 text-white fw-bold" role="button">عرض المزيد</a>
                  </div>
                </div>
              </div>
              
              {/* Tab 4: Customer Reviews */}
              <div className={`tab-pane tab_4 fade ${activeTab === 'tab4' ? 'show active' : ''}`} role="tabpanel">
                <div className="row py-4">
                  <h5 className="text-center fw-bold text-gray-2 mb-3">شركاء النجاح</h5>
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    {partnerImages.map((image, index) => (
                      <SwiperSlide key={index} className="d-flex align-items-center">
                        <img src={image} loading="lazy" width="100%" alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                
                <div className="row py-4">
                  <h5 className="text-center fw-bold text-gray-2">آراء العملاء</h5>
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    {customerReviews.map((review, index) => (
                      <SwiperSlide key={index} className="d-flex align-items-center">
                        <div className="card border-0 shadow w-100">
                          <div className="card-body px-md-4">
                            <p className="card-text border-start border-info border-2 border-sm-4 fw-bolder fs-7 text-secondary-700 p-2">
                              <q> {review.text} </q>
                            </p>
                            <span className="fs-7 text-secondary-500 fw-bolder"> {review.name} </span>
                            <br />
                            <span className="fs-8 text-info fw-bolder"> {review.position} </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;

