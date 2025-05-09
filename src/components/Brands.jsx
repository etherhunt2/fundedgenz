import React from 'react';

const Brands = () => {
    const brands = [
        "https://iko.themegenix.net/wp-content/uploads/2024/04/brand_img01.png",
        "https://iko.themegenix.net/wp-content/uploads/2024/04/brand_img02.png",
        "https://iko.themegenix.net/wp-content/uploads/2024/04/brand_img03.png",
        "https://iko.themegenix.net/wp-content/uploads/2024/04/brand_img04.png",
        "https://iko.themegenix.net/wp-content/uploads/2024/04/brand_img05.png",
        "https://iko.themegenix.net/wp-content/uploads/2024/04/brand_img03.png",
    ];

    return (
        <section className="brands-section">
            <div className="container">
                <div className="brands-title-container">
                    <h2 className="brand-title">Our top Partner</h2>
                </div>

                <div className="brand-item-wrap style2">
                    <div className="row g-0 brand-active2">
                        {brands.map((brand, index) => (
                            <div key={index} className="col-12">
                                <div className="brand-item">
                                    <a href="#">
                                        <img src={brand} alt={`Brand ${index + 1}`} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands; 