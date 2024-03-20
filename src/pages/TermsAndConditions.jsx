import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const TermsAndConditions = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/', { replace: true });
    };
    return (
        <>
            {/* <div className="navbar">
                <img src="/assets/dynaroof-logo.png" alt="" />
                <ul className="nav-links mt-2 mb-3">
                    <li><button onClick={handleClick} title="Go Home">Home</button></li>
                </ul>
            </div> */}
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
                                
                                <div className="do-content d-flex flex-row align-items-center">
                                    <div className="do-icon d-flex flex-row justify-content-center align-items-center">
                                        <FaRegThumbsUp />
                                    </div>
                                    <p>Do's</p>
                                </div>
                            </div>
                            <ol>
                                <li>
                                    USE PPE while handling & installing.
                                </li>
                                <li>
                                    Keep Product in flat, dry & ventilated areas.
                                </li>
                                <li>
                                    The Product must be lifted with Nylon ropes.
                                </li>
                                <li>
                                    Ensure zero water seepage during storage.
                                </li>
                                <li>
                                    Avoid metal to metal contact
                                </li>
                                <li>
                                    Good quality fasteners to be used.
                                </li>
                            </ol>
                        </div>

                        <div className="conditions-div" style={{background:'#d40f3a'}}>
                            <div className="d-flex flex-row align-items-center" style={{marginLeft:'10px', marginBottom:'20px'}}>
                                
                                <div className="dont-content d-flex flex-row align-items-center">
                                    <div className="dont-icon d-flex flex-row justify-content-center align-items-center">
                                        <FaRegThumbsDown />
                                    </div>
                                    <p>Dont's</p>
                                </div>
                            </div>
                            <ol>
                                <li>
                                    Product should not come in contact with wet.
                                </li>
                                <li>
                                    Product should not come in contact with cement.
                                </li>
                                <li>
                                    Product should not come in contact with metal filings
                                </li>
                                <li>
                                    Product should not be kept on floor directly.
                                </li>
                                <li>
                                    Do not allow dirt to be accumulated on Product.
                                </li>
                                <li>
                                    Do not slide sheets on rough surface.
                                </li>
                            </ol>
                        </div>

                        <div className="d-flex flex-row align-items-center header">
                            <h5>Disclaimer of other warranties</h5>
                            <div className="divider"></div>
                        </div>
                        <p>
                            Except as expressly set forth in this Warranty Certificate, Company disclaims, and Buyer waives, any and all other 
                            warranties, whether express or implied, oral or written, including without limitation, any implied warranties of 
                            merchantability or fitness for a particular purpose.
                        </p>

                        <div className="d-flex flex-row align-items-center header">
                            <h5>Limitation of remedies and liability:</h5>
                            <div className="divider"></div>
                        </div>
                        <p>
                            The parties agree that the Buyer’s sole and exclusive remedy against the Company shall be for the repair or 
                            replacement of the defective portion of the warranted Product. The buyer agrees that no other remedy or liability 
                            (including, but not limited to, indirect, special, punitive, loss of use, business, profits, sales, injury to person 
                            or property, or any other incidental or consequential loss or damages) shall be available to the Buyer and is hereby 
                            deemed to be expressly waived and excluded. The maximum liability of the Company in any circumstances, shall not exceed 
                            the invoice value of the Product. All costs with respect to dismantling, installation, reinstallation, transportation 
                            shall be solely on account of Buyer and the Company shall not be responsible for the same.
                        </p>
                        
                        <div className="d-flex flex-row align-items-center header">
                            <h5>Claims:</h5>
                            <div className="divider"></div>
                        </div>
                        <p>
                            In the event of any claim under this limited warranty, Buyer must demonstrate to the Company’s satisfaction that 
                            the failure was due to a breach of this limited warranty. Buyer has the responsibility to provide written notice 
                            containing particulars sufficient to identify the Buyer and all reasonably obtainable information with respect to 
                            the time, place and circumstance, including a video and/or photographs of the claimed Perforation due to any 
                            manufacturing defects for the Company’s inspection. Such records shall at a minimum include the date of purchase, 
                            the place of purchase, dealer / distributor details and the invoice or any other information reasonably required by 
                            the Company. The Buyer will arrange for the Company or any agency appointed by the Company to have, during normal 
                            business hours, complete access to the Product and shall be responsible to make available the Product for inspection 
                            or survey to determine the actual root cause of Perforation. The Buyer shall further provide access to the Company to 
                            any information and personnel having knowledge of or information pertaining to the claims under this Limited Warranty. 
                            It is a primary condition to any obligation of the Company under this limited warranty that the Buyer shall have fully 
                            paid the agreed contract price and invoice value including tax for the Product sold by the Company to Buyer. Subject to 
                            strict compliance of the above conditions, the Company shall repair or replace the Product within Ninety (90) days of 
                            receiving all information, documents from the Buyer and inspection of Product to determine root cause is completed by 
                            the Company. In the event of any repair or replacement by the Company of the Product, the warranty shall stand 
                            extinguished and cancelled. The decision of the Company shall be final and binding on the Buyer.
                        </p>

                    </div>
                    
                    <div className="content-area-4 colored-border">
                        <div className="d-flex flex-row  align-items-center header">
                            <h5>Entire understanding:</h5>
                            <div className="divider"></div>
                        </div>
                        <p>
                            Any and all representations, promises, warranties or statements by the Company’s agents or personnel that varies, 
                            conflicts, contradicts or inconsistent in any way from the terms of written limited warranty stipulated hereunder, 
                            shall be given no force or effect and shall be deemed null and void. Any such representations, promises, warranties 
                            or statements do not constitute warranties, shall not be relied upon by the buyer and are not part of this limited 
                            warranty or of the contract for sale of the Product between the Company and buyer. This limited warranty shall be 
                            deemed to be a part of the contract of sale between the Company and buyer for the Product sold by the Company to the 
                            buyer. The entire agreement and understanding between the Company and the buyer with respect to Product is embodied 
                            in this writing. This writing constitutes the final expression of the parties’ agreement with respect to warranties 
                            and is a complete and exclusive statement of the terms of that agreement.
                        </p>

                        <div className="d-flex flex-row  align-items-center header">
                            <h5>Warranty not transferable:</h5>
                            <div className="divider"></div>
                        </div>
                        <p>
                            This Limited Warranty is issued only to the original Buyer and is nontransferable and/or non-assignable. 
                            Should the Buyer become insolvent, bankrupt, make an assignment for the benefit of its creditors, or for 
                            any reason discontinue its normal or regular business practices, this warranty shall forthwith become null 
                            and void and have no legal effect.
                        </p>

                        <div className="d-flex flex-row  align-items-center header">
                            <h5>Non waiver:</h5>
                            <div className="divider"></div>
                        </div>
                        <p>
                            In any instance or series of instances, the determination of the Company not to exercise any right hereunder or 
                            not to require compliance with any term or condition hereof, shall not constitute a waiver of the Company’s rights 
                            to exercise all rights and to require compliance with all terms and conditions herein on all occasions prior and 
                            subsequent to such instance or instances, and no such determination or Series of determinations by the Company 
                            shall constitute an alteration or waiver of the rights of the Company and Buyer as otherwise set forth herein.
                        </p>

                        <div className="d-flex flex-row  align-items-center header">
                            <h5>Governing law and jurisdiction:</h5>
                            <div className="divider"></div>
                        </div>
                        <p>
                            The rights and obligations of the Company and Buyer hereunder shall be construed and governed by the laws of India, 
                            without giving effect to conflict of law principles and the Parties agree to submit to the exclusive jurisdiction 
                            of the appropriate courts at Guwahati, Assam(India).
                        </p>
                        
                    </div>

                    <div className="d-flex flex-row justify-content-center" style={{marginBottom:'30px'}}>
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>
                    
                </div>
            </div>  
        </>

    )
}

export default TermsAndConditions;