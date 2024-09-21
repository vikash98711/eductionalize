import Link from 'next/link';
import React from 'react';

async function fetchBlog() {
  try {
    const response = await fetch('https://studentapp.theoraclecrm.com/admin/public/api/blog');
    const responseJson = await response.json();
    return responseJson.blog_list.data;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array on error
  }
}

async function fetchVideo() {
  try {
    const response = await fetch('https://studentapp.theoraclecrm.com/admin/public/api/video',{
      method: 'GET', 
      // headers: {
      //     'Content-Type': 'application/json',
      // }, 
      next: { revalidate: 10 },
    });
    
    
    const responseJson = await response.json();
    
    const videoId = extractVideoId(responseJson.videos.data[0]?.video_link);
   

    return videoId;
  } catch (error) {
    console.log(error);
    return null; // Return null on error
  }
}

function extractVideoId(url) {
  const match = url?.match(/(?:\?|&)v=([^&#]+)/);
  return match ? match[1] : null;
}

const BlogVideoNotice = async () => {
  const blogData = await fetchBlog();
  const videoData = await fetchVideo();

  return (
    <section className='bg-primary2 Blog-Video-Notice-wrapper pt-pb'>
      <div className="mb-0 text-center">
        <h2 className="text-center text-white">Latest Updates</h2>
        <hr />
      </div>
      <div className='container text-wrapper-combine-vbn mt-5'>
        <div className='row'>
          <div className='col-lg-7'>
            <h1 className='text-white title mb-5px'>Blogs</h1>
            <hr />
            <div className='row'>
              {blogData.length > 0 ? (
                blogData.slice(0, 2).map((blogValue,) => (
                  <div className="col-lg-12 col-md-12 col-sm-12 Blogs-card-wrapper-grid-common" key={blogValue.id}>
                    <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4 blog-imageswrapper">
                          <Link href={`/blog/${blogValue.slug}`}>
                            <img
                              src={blogValue.blog_image}
                              className="img-fluid rounded-start"
                              alt="Blog Image"
                              height={100}
                            />
                          </Link>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body mb-3 text-start">
                            <p className="mb-1 text-danger fw-600">
                              <Link href={`/blog/${blogValue.slug}`} className='text-decoration-none text-dark'>{blogValue.blog_title}</Link>
                            </p>
                            <div className='d-flex'>
                              <p className="mb-1">
                                <Link href={`/blog/${blogValue.slug}`} className='text-decoration-none text-dark'>{blogValue.short_desc}</Link>
                                <Link href={`/blog/${blogValue.slug}`} className='btn text-color-orange-fw fw-600 text-end p-0 w-max-content'>
                                  <i className="fa-solid fa-angle-down"></i> Read More
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No blogs available.</p>
              )}
            </div>
          </div>
          <div className='col-lg-5'>
            <h1 className='text-white title mb-5px'>Video</h1>
            <hr />
            {videoData ? (
              <iframe width="100%" height="286px" src={`https://www.youtube.com/embed/${videoData}`} allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            ) : (
              <p className="text-white">No video available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogVideoNotice;
