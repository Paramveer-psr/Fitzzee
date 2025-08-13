import React from 'react'
import '../mini-footer/MiniFooter.css'

const MiniFooter = () => {
    return (
        <div id="footer">
            <div className="footer-elements">
                <p><b><a href="#">Home</a> | <a href="#">About</a> | <a href="#">Reviews</a> | <a href="#">Contact</a></b></p>
            </div>
            <div className="copyright">
                <p>Copyright © 2025 Fitzzee, All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default MiniFooter
