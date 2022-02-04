import React from 'react'
import './Footer.css'

import Text from './Text/Text.js'
import cities,{companies,contacts,legals} from './Arrays.js'
import Image from '../Restaurants/Image/Image'
import swiggyimg from '../../../Images/Swiggy.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faPinterest,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
   
    return (
        <footer>
            <div className="footerContainer">
                <div className="upperfooter">
                        <div className="container">
                            <p className="grey">COMPANY</p> 
                            <ul>
                                {
                                    companies.map((company,index)=>{

                                        return <Text txtcls="white" text={company}/>
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <p className="grey">CONTACT</p>
                            <ul>
                                {
                                    contacts.map((contact,index)=>{
                                        
                                            return <Text txtcls="white" text={contact}/>
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <p className="grey">LEGAL</p>
                            <ul>
                                {
                                    legals.map((legal,index)=>{
                                            return <Text txtcls="white" text={legal}/>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="imgdivfoot">
                            <a href='https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920'><Image src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" imgcls="appstorefoot"/></a>
                            <a href='https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN&gl=US'><Image src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" imgcls="googleplayfoot"/></a>
                        </div>
                </div>
                <hr size="1"/>
                
                <p className="grey margn">WE DELIVER TO</p>
                <div className="middlefooter">
                    <div>
                        <ul>
                            {
                                cities[0].map((city,index)=>{
                                    return <Text txtcls="white" text={city}/>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="mrgnlft">
                            {
                                cities[1].map((city,index)=>{
                                    return <Text txtcls="white" text={city}/>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="mrgnlft">
                            {
                                cities[2].map((city,index)=>{
                                    return <Text txtcls="white" text={city}/>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="mrgnlft">
                            {
                                cities[3].map((city,index)=>{
                                    return <Text txtcls="white" text={city}/>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <hr size="1"/>

                <div className="lowerfooter">
                <a href="https://www.swiggy.com/"><Image src={swiggyimg} imgcls="swigyimg"/></a>
                    <p className="copy">© 2022 Swiggy Clone for Geogo by Bhargav D Bhat</p>
                    <div className="footicon">
                    <a href="https://www.facebook.com/swiggy.in/"><FontAwesomeIcon icon={faFacebookF} color="white" size="lg" className="icon"/></a>
                    <a href="https://in.pinterest.com/swiggyindia/_created/"><FontAwesomeIcon icon={faPinterest} color="white" size="lg" className="icon"/></a>
                    <a href="https://www.instagram.com/swiggyindia/"><FontAwesomeIcon icon={faInstagram} color="white" size="lg" className="icon"/></a>
                    <a href="https://twitter.com/swiggy_in?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FontAwesomeIcon icon={faTwitter} color="white" size="lg" className="icon"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
