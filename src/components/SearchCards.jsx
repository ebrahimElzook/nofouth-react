const SearchCards = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 search_cards">
        <div className="row gx-2 gx-md-4" data-aos="fade-up">
          <div className="col-6 col-sm-12">
            <div className="card mb-2 rounded" style={{cursor: 'pointer'}}>
              <div
                className="image-container rounded"
                style={{
                  backgroundImage: "url('/src/assets/images/World Map.svg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.3s ease-in-out'
                }}
              >
                <div className="card-body rounded px-5 py-4 py-md-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                  <h4 className="card-title text-white fs-5 text-shadow" style={{fontWeight: 600}}>
                    بحث باستخدام الخريطة
                    <i className="fa-solid fa-arrow-left ms-2" style={{opacity: 0}}></i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-12">
            <a href="building_cards.html" className="text-decoration-none">
              <div className="card mb-2 rounded">
                <div
                  className="image-container rounded"
                  style={{
                    backgroundImage: "url('/src/assets/images/Hexagon.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                >
                  <div className="card-body rounded px-5 py-4 py-md-5" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                    <h4 className="card-title text-white fs-5 text-shadow" style={{fontWeight: 600}}>
                      بحث باستخدام جدول الشواغر
                      <i className="fa-solid fa-arrow-left ms-2" style={{opacity: 0}}></i>
                    </h4>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 pb-2 d-flex align-items-stretch" data-aos="fade-up">
        <div className="w-100 bg-white btn-container shadow text-center main-video-youtube">
          <iframe
            src="https://www.youtube.com/embed/MFeo9fFoqZE"
            className="w-100 h-100"
            style={{borderRadius: '5px !important'}}
            title="خدمة #ادارة_الاملاك باحترافية عالية من #نفوذ_التطوير"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SearchCards;

