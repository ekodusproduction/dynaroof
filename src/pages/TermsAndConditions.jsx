import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";

const TermsAndConditions = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/', { replace: true });
    };
    return (
        <>
            <div className="navbar">
                <img src="/assets/dynaroof-logo.png" alt="" />
                <ul className="nav-links mt-2 mb-3">
                    <li><button onClick={handleClick} title="Go Home">Home</button></li>
                </ul>
            </div>
            <div className="container">
                <div className="terms-content">
                    <div className="content-area-1 colored-border">
                        <div className="d-flex flex-row  align-items-center header">
                            <h5>Dyna Pro (10Years) & Super Pro (20 Years) Warranty</h5>
                            <div className="divider"></div>
                        </div>
                        <p>
                            DynaRoof Pvt. Ltd. hereby provides this Warranty to the Bonafide Buyer of the Product named in the invoice
                            (‘Customer’ or ‘Buyer’), applicable on Dyna Pro and Dyna Super Pro- color coated roofing sheets (Detail specifications 
                            provided in the invoice) (Hereinafter referred as ‘Product’), to be used for roofing applications only against the 
                            detail T&C mentioned below as “Warranty Applicable on”. During the warranty for a period of 10 Years for Dyna Pro 
                            and 20 Years for Dyna Super Pro from the date of purchase and installation (Installation has to be done within 30days 
                            from the date of purchase), the company will at its sole discretion, repair or replace the product or parts of a 
                            product that prove to be defective because of perforation due to any manufacturing defects, under normal conditions. 
                            To get the warranty facilitation one has to Visit Company’s website or the link https://wa.dynaroof.com/  and register 
                            themselves by filling the required fields in the form. The registration must be done within 30 days from the date of 
                            purchase of the material to avail warranty on the products. No warranty will be applicable by any means if the 
                            registration not done under 30 days.
                        </p>
                        <p>
                            The Warranty is subject to standard terms printed on tax invoice and terms and conditions as mentioned below:-
                        </p>

                        <div className="d-flex flex-row align-items-center header">
                            <h5>Terms & Conditions</h5>
                            <div className="divider"></div>
                        </div>
                        <div className="conditions-div">
                            <ol>
                                <li>
                                    The product must be of the premium category of DynaRoof, termed as Dyna Pro with 10 Years or Dyna Super Pro with 20 
                                    years of warranty and must be purchased from a DynaRoof authorized Distributor/Dealer/Retailer of the company having 
                                    its unique code starting with “DynaRoof”  X.XXmm (X- Thickness) a product of DynaRoof Pvt. Ltd with a combination of 
                                    Number and Letter i.e- P 26B B4 or S 26B B4 (P- Dyna Pro and S- Dyna Super Pro) and processed and installed for roofing 
                                    within 90 days from the date of manufacturing and supply within the territory of India and Bhutan.
                                </li>
                                <li>
                                    Please keep a record of the unique code printed on the reverse of your roofing sheet before installation is done, 
                                    which is mandatory to be filled at the time of filling the warranty registration form.
                                </li>
                                <li>
                                    The product as supplied should not come in direct/indirect contact with chemical fumes, before, during or after use.
                                </li>
                                <li>
                                    The roof must be maintained in accordance with the Do’s and Don’ts mentioned in the DynaRoof Customer/Dealer guidelines 
                                    received along with the invoice from dealer or can be availed from the website link of the 
                                    company - <a href="https://dynaroof.com/customer-guidelines" target="_blank">https://dynaroof.com/customer-guidelines</a>
                                </li>
                                <li>
                                    Surfaces of the installations must be freely exposed to washing by rainfall and kept clear of accumulated dirt and 
                                    debris.
                                </li>
                                <li>
                                    Water logging on roofs must be avoided and overlaps must be adequately sealed to prevent ingress of water.
                                </li>
                                <li>
                                    End user customer must clean the installed sheets at least twice in a year.
                                </li>
                                <li>
                                    The coated metal must not be cleaned with abrasive or chemical cleaners.
                                </li>
                                <li>
                                    Do not allow contact of coated steel product with incompatible material that includes lead, copper, bare steel, green 
                                    or chemically treated timber, wet or dry concrete, soils, vegetable matter, any material which will inhibit normal 
                                    exposure to the atmosphere.
                                </li>
                                <li>
                                    This warranty specifically excludes from its coverage any defects or failures in the exterior durability standards 
                                    of the product caused by any force majeure events including acts of God (earthquake, fire, storm, floods, torrential 
                                    rain, cyclone, hailstorm), falling objects, external force, explosions, fire, riots, civil commotions, acts of war, 
                                    radiation, harmful gases or fumes, chemicals or foreign substances in the air or atmosphere.
                                </li>
                                <li>
                                    Reference to ISO-9223 this T&C is applicable to the region falls under C2 Level only.
                                </li>
                            </ol>
                        </div>
                        
                    </div>
                    
                    <div className="content-area-2 colored-border">
                        <div className="d-flex flex-row  align-items-center header">
                            <h5>Warranty not Applicable on:</h5>
                            <div className="divider"></div>
                        </div>
                        <div className="conditions-div">
                            <ol>
                                <li>
                                    Water damage to the Product, directly or indirectly, due to condensation, improper storage, handling, processing, 
                                    forming or packaging prior to or during installation.
                                </li>
                                <li>
                                    Usage of product in industrial areas (direct/indirect contact with corrosive fumes, chemical fumes, ash, cement dust 
                                    or animal waste before, during or after use)
                                </li>
                                <li>
                                    Natural reduction in paint gloss and natural colour change or the paint finish or any change in colour due to 
                                    accumulation of debris.
                                </li>
                                <li>
                                    The warranty does not cover the backside of the coated product.
                                </li>
                                <li>
                                    Product that has suffered scratching or abrasion or impact by any hard object.
                                </li>
                                <li>
                                    Deterioration caused by use of improper fastener product.
                                </li>
                                <li>
                                    The warranty doesn’t cover the areas subject to water runoff from lead or copper flashings or areas in metallic contact with lead or copper.
                                </li>
                                <li>
                                    The warranty shall not be applied to the damage or failure which is occurring from accident, natural disaster, fire, 
                                    flood, explosion, falling stone, acts of warriots or due to any other force majeure conditions.
                                </li>
                                <li>
                                    The warranty shall not be applied to the damage or failure which is occurring from accident, natural disaster, fire, 
                                    flood, explosion, falling stone, acts of warriots or due to any other force majeure conditions.
                                </li>
                                <li>
                                    Warranty can be claimed only by submitting the warranty card in good condition provided by the company while 
                                    purchasing of the material along with the original tax invoice received from the Distributor/Dealer/Retailer or 
                                    the Company.
                                </li>
                            </ol>
                        </div>
                        <p>
                            The warranty will be considered null and void if during the investigation company identifies the product has been 
                            mishandled or not installed as per the company-prescribed Do’s and Don’ts during the warranty period. Under no 
                            circumstances shall coverage get extended to any loss or damage to a person or property for any incidental, 
                            contingent, special or consequential damage.
                        </p>
                        <div className="d-flex flex-row  align-items-center header">
                            <h5 style={{color:'#4baf46'}}>Other excluded situations</h5>
                            <div className="divider" style={{border:'3px solid #4baf46'}}></div>
                        </div>
                        <div className="conditions-div" style={{background:'#4baf46', marginBottom:'50px'}}>
                            <p style={{marginLeft:'15px'}}>This limited warranty DOES NOT APPLY in the event of:</p>
                            <ol>
                                <li>
                                    Bends less than 4T for all sheet thickness.
                                </li>
                                <li>
                                    Slopes of the roof or sections of the roof should not more than 75° from the vertical.
                                </li>
                                <li>
                                    Mechanical chemical or other damage sustained during shipment, storage, forming fabrication or during or after erection and installation.
                                </li>
                                <li>
                                    Forming which incorporates severe reverse bending or which subjects coating to alternate compression and tension.
                                </li>
                                <li>
                                    Failure to Provide free drainage of water, including internal condensation, from overlaps on all other surfaces of 
                                    the sheets or panels.
                                </li>
                                <li>
                                    Failure to remove debris from overlaps and all other surfaces of the sheets or panels.
                                </li>
                                <li>
                                    Damage caused to the metallic coating by improper roll forming, scouring or cleaning procedures.
                                </li>
                                <li>
                                    Deterioration of the panels caused by contact with green or wet lumber or wet storage stain caused by water damage
                                    or condensation.
                                </li>
                                <li>
                                    Presence of damp insulation or other corrosive Product in contact with or close proximity to the panel.
                                </li>
                                <li>
                                    Warranty will not apply to Product stored or installed in a way which allows contact with animal and / or animal 
                                    waste or its decomposed Product.
                                </li>
                                <li>
                                    This warranty will not apply to the defects caused by water infiltration due to improper packaging.
                                </li>
                                <li>
                                    This warranty is not valid when there is an exposure in abnormal conditions (aggressive or pollute) such as humid area, 
                                    tropical area, the place within one-mile distance from the seashore, the vicinity of chemical or iron industries, etc.
                                </li>
                                <li>
                                    This warranty shall not be applied to the damage or failure which is occurring from accident, natural disaster, 
                                    fire, flood, explosion, falling stone, acts of warriots or due to any other force majeure conditions.
                                </li>
                                <li>
                                    Improper handling and storage of the Product or misuse, willful default, gross negligence of Buyer.
                                </li>
                                <li>
                                    The warranty will be considered null and void if during the investigation company identifies the Product has been 
                                    mishandled or not installed as per the company-prescribed Do’s and Don’ts during the warranty period. Under no 
                                    circumstances shall coverage get extended to any loss or damage to a person or property for any incidental, 
                                    contingent, special or consequential damage.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="content-area-3 colored-border">
                        <div className="d-flex flex-row align-items-center header">
                            <h5>Do’s and Don’ts</h5>
                            <div className="divider"></div>
                        </div>
                        <div className="conditions-div">
                            <div className="d-flex flex-row align-items-center" style={{marginLeft:'10px', marginBottom:'20px'}}>
                                <div className="do-icon d-flex flex-row justify-content-center align-items-center">
                                    <FaRegThumbsUp />
                                </div>
                                <div className="do-content">
                                    <p>Do's</p>
                                </div>
                            </div>
                            <ol>
                                <li>
                                    The product must be of the premium category of DynaRoof, termed as Dyna Pro with 10 Years or Dyna Super Pro with 20 
                                    years of warranty and must be purchased from a DynaRoof authorized Distributor/Dealer/Retailer of the company having 
                                    its unique code starting with “DynaRoof”  X.XXmm (X- Thickness) a product of DynaRoof Pvt. Ltd with a combination of 
                                    Number and Letter i.e- P 26B B4 or S 26B B4 (P- Dyna Pro and S- Dyna Super Pro) and processed and installed for roofing 
                                    within 90 days from the date of manufacturing and supply within the territory of India and Bhutan.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>  
        </>

    )
}

export default TermsAndConditions;