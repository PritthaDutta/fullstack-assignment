import React from 'react'

const Footer = () => {
    return (
        <div className='w-100per'>
            <footer className="bg-dark">
                <div className="grid-container--fill grid-col-gap-2 grid-row-gap-2 p-t50 p-b50 p-l100 p-r100 light">
                    <div>
                        <h3 className="mt-10 mb-30">Abstract</h3>
                        <div className="flex-c align-flex-start r-gap-pt75">
                            <li className='fs-14'>Branches</li>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-10 mb-30">Resources</h3>
                        <div className="flex-c align-flex-start r-gap-pt75">
                            <li className='fs-14'>Blog</li>
                            <li className='fs-14'>Help Center</li>
                            <li className='fs-14'>Release Notes</li>
                            <li className='fs-14'>Status</li>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-10 mb-30">Community</h3>
                        <div className="flex-c align-flex-start r-gap-pt75">
                            <li className='fs-14'>Twitter</li>
                            <li className='fs-14'>Linkedin</li>
                            <li className='fs-14'>Facebook</li>
                            <li className='fs-14'>Dribble</li>
                            <li className='fs-14'>Podcast</li>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-10 mb-30">Company</h3>
                        <div className="flex-c align-flex-start r-gap-pt75">
                            <li className='fs-14'>About Us</li>
                            <li className='fs-14'>Careers</li>
                            <li className='fs-14'>Legal</li>
                            <div className='flex-c'>
                                <h3 className="mt-10 mb-10 fs-16">Contact Us</h3>
                                <li className='fs-14'>info@abstract.com</li>
                            </div>
                        </div>
                    </div>
                    <div className='flex-c justify-flex-end'>
                        
                        <div className="flex-c r-gap-pt75">
                            <li className='fs-14'>@ Copyright</li>
                            <li className='fs-14'>Abstract Studio Design, Inc</li>
                            <li className='fs-14'>All Rights Reserved</li>
                        </div>
                    </div>
                </div>
            </footer>  
        </div>
    )
}

export default Footer