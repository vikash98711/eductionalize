"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
const settings = {
    dots: false,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const Blog = () => {
    const [noticeData, setNoticeData] = useState([]);
    const [loading, setLoading] = useState(true);

   

    const fetchDataFunc = async () => {
        try {
            const response = await fetch('https://studentapp.theoraclecrm.com/admin/public/api/notice-board');
            if (response.ok) {
                const responseJson = await response.json();
                setNoticeData(responseJson.noticeboard.data);
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("An error occurred", error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (timeString) => {
        return new Date(timeString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    useEffect(() => {
        fetchDataFunc();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section className='pt-pb bg-grey'>
            <div className="container">
                <div className="mb-4 text-center">
                    <h2>Notice Board</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-8 col-12">
                        <div className='blog-slider-wrap'>
                            <Slider {...settings}>
                                {noticeData.length > 0 ? (
                                    noticeData.slice(0, 4).map((noticeValue) => (
                                        <div className="px-2" key={noticeValue.id}>
                                            <div className="blog-card-wrap rounded-4 position-relative mb-5">
                                                <img src={noticeValue.image} alt="blog" className='img-fluid w-100 rounded-4 h-image-rounded' />
                                                <div className="blog-card-detail position-absolute top-100 start-50 translate-middle px-3 w-100">
                                                    <div className="bg-white shadow rounded-top-4 rounded-bottom-5 p-3">
                                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                                            <span className="btn-sm bg-primary text-white rounded px-2 py-1">
                                                                Category
                                                            </span>
                                                            <span className='text-secondary'>{formatDate(noticeValue.date)}</span>
                                                        </div>
                                                        <h5 className='text-ellipsis'>{noticeValue.title}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No notices available.</p>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
