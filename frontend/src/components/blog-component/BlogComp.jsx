import React, { useEffect } from 'react'
import './BlogComp.css';
import { showMoreBlogs } from './logic';
import img from '../../../src/images/aids-img.jpg';

const BlogComp = () => {
    return (
        <section id="blog">
            <div className="blog-heading">
                <span>Our Recent Posts</span>
                <h3>Our Blog</h3> 
            </div>
            <div className="blog-container" id="blogContainer">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={img} alt="image" />
                    </div>
                    <div className="blog-text">
                        <span>05 Feburary 2024 / AIDS Awareness Campaign</span>
                        <a className="blog-title" href="#">All you need to know about AIDS!</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere porro quam ex laborum
                            consequatur suscipit dolorum blanditiis vero praesentium natus quas dignissimos sit veritatis
                            nam nihil, aut laudantium molestias.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={img} alt="image" />
                    </div>
                    <div className="blog-text">
                        <span>05 Feburary 2024 / AIDS Awareness Campaign</span>
                        <a className="blog-title" href="#">All you need to know about AIDS!</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere porro quam ex laborum
                            consequatur suscipit dolorum blanditiis vero praesentium natus quas dignissimos sit veritatis
                            nam nihil, aut laudantium molestias.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={img} alt="image" />
                    </div>
                    <div className="blog-text">
                        <span>05 Feburary 2024 / AIDS Awareness Campaign</span>
                        <a className="blog-title" href="#">All you need to know about AIDS!</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere porro quam ex laborum
                            consequatur suscipit dolorum blanditiis vero praesentium natus quas dignissimos sit veritatis
                            nam nihil, aut laudantium molestias.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="blog-box hidden">
                    <div className="blog-img">
                        <img src={img} alt="image" />
                    </div>
                    <div className="blog-text">
                        <span>05 Feburary 2024 / AIDS Awareness Campaign</span>
                        <a className="blog-title" href="#">All you need to know about AIDS!</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere porro quam ex laborum
                            consequatur suscipit dolorum blanditiis vero praesentium natus quas dignissimos sit veritatis
                            nam nihil, aut laudantium molestias.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="blog-box hidden">
                    <div className="blog-img">
                        <img src={img} alt="image" />
                    </div>
                    <div className="blog-text">
                        <span>05 Feburary 2024 / AIDS Awareness Campaign</span>
                        <a className="blog-title" href="#">All you need to know about AIDS!</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere porro quam ex laborum
                            consequatur suscipit dolorum blanditiis vero praesentium natus quas dignissimos sit veritatis
                            nam nihil, aut laudantium molestias.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="blog-box hidden">
                    <div className="blog-img">
                        <img src={img} alt="image" />
                    </div>
                    <div className="blog-text">
                        <span>05 Feburary 2024 / AIDS Awareness Campaign</span>
                        <a className="blog-title" href="#">All you need to know about AIDS!</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere porro quam ex laborum
                            consequatur suscipit dolorum blanditiis vero praesentium natus quas dignissimos sit veritatis
                            nam nihil, aut laudantium molestias.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="blog-box hidden">
                    <div className="blog-img">
                        <img src={img} alt="image" />
                    </div>
                    <div className="blog-text">
                        <span>05 Feburary 2024 / AIDS Awareness Campaign</span>
                        <a className="blog-title" href="#">All you need to know about AIDS!</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere porro quam ex laborum
                            consequatur suscipit dolorum blanditiis vero praesentium natus quas dignissimos sit veritatis
                            nam nihil, aut laudantium molestias.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="blog-box hidden">
                    <div className="blog-img">
                        <img src={img} alt="image" />
                    </div>
                    <div className="blog-text">
                        <span>05 Feburary 2024 / AIDS Awareness Campaign</span>
                        <a className="blog-title" href="#">All you need to know about AIDS!</a>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facere porro quam ex laborum
                            consequatur suscipit dolorum blanditiis vero praesentium natus quas dignissimos sit veritatis
                            nam nihil, aut laudantium molestias.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
            <button id="seeMoreBtn" onClick={showMoreBlogs}>See More Blogs</button>
        </section>

    )
}

export default BlogComp
