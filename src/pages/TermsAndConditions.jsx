import React from "react";
import { useNavigate } from "react-router-dom";

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
            <div className="container terms-and-conditions-div">
                <h5>Dyna Pro & Super Pro with 10 & 20 Years Warranty</h5>
                <p>
                    DynaRoof Pvt. Ltd. hereby provides this Warranty to the Bonafide Buyer of the Product named
                    in the invoice (‘Customer’ or ‘Buyer’), applicable on Dyna Pro and Dyna Super Pro- color coated
                    roofing sheets (Detail specifications provided in the invoice) (Hereinafter referred as ‘Product’),
                    to be used for roofing applications only against the detail T&C mentioned below as “Warranty Applicable on”.
                    During the warranty for a period of 10 years from the date of purchase and installation (Installation has
                    to be done within 10-15days from the date of purchase), the company will at its sole discretion, repair or
                    replace the product or parts of a product that prove to be defective because of perforation due to 
                    manufacturing defects, under normal conditions.
                </p>
                <h5>Terms And Conditions</h5>
                <ol className="terms-list">
                    <li>
                        <p>
                            The product must be of the premium category of DynaRoof that termed as Dyna Pro with 10 Years or Dyna
                            Super Pro with 20 years of warranty and must be purchased from a DynaRoof authorized distributor/Dealer/retailer
                            of the company only having non erasable product liner marking as “0.00mm a product of DynaRoof Pvt. Ltd AZ150 A/M/WB
                            DD MM YY ISO 9001:2015 having its unique code starting with S or P (S-Super Pro and P- Pro) and combination of Number
                            and Letter i.e- S 26B B4 or P 26B B4 and processed and installed for roofing in 60 days from the date of manufacturing
                            and supply within the Indian and territory of Bhutan. 
                        </p>
                    </li>
                    <li>
                        <p>
                            The product as supplied should not come in direct/indirect contact with chemical fumes, before, during or after use.
                        </p>
                    </li>
                    <li>
                        <p>
                            The roof must be maintained in accordance with the Do’s and Don’ts mentioned in the DynaRoof Customer/Dealer guidelines.
                        </p>
                    </li>
                    <li>
                        <p>
                            To get the warranty facilitation one has to Visit Company’s website www.houseofdyna.com and register themselves filling the required fields in the form.
                        </p>
                    </li>
                    <li>
                        <p>
                            The registration must be done within 30 days from the date of purchasing of the material to avail warranty on the
                            products. No warranty will be applicable by any means after 30 days.
                        </p>
                    </li>
                </ol>

                <h5>Warranty not Applicable:</h5>
                <ol className="warranty-not-applicable-list">
                    <li>
                        <p>
                            Water damage to the Product, directly or indirectly, due to condensation, improper storage, handling,
                            processing, forming or packaging prior to or during installation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Usage of product in industrial areas (direct/indirect contact with corrosive fumes, chemical fumes, ash,
                            cement dust or animal waste before, during or after use)
                        </p>
                    </li>
                    <li>
                        <p>
                            Natural reduction in paint gloss and natural colour change or the paint finish or any change in colour due
                            to accumulation of debris.
                        </p>
                    </li>
                    <li>
                        <p>
                            Product that has suffered scratching or abrasion or impact by any hard object.
                        </p>
                    </li>
                    <li>
                        <p>
                            Deterioration caused by use of improper fastener product.
                        </p>
                    </li>
                    <li>
                        <p>
                            The warranty doesn’t cover the areas subject to water runoff from lead or copper flashings or areas in metallic
                            contact with lead or copper.
                        </p>
                    </li>
                    <li>
                        <p>
                            The warranty shall not be applied to the damage or failure which is occurring from accident, natural disaster,
                            fire, flood, explosion, falling stone, acts of warriots or due to any other force majeure conditions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Improper handling and storage of the product or misuse, wilful default, gross negligence of Buyer.
                        </p>
                    </li>
                    <li>
                        <p>
                            Warranty can be claimed only by submitting the original warranty card with date of purchase, signature 
                            and stamp of the authorised distributor/dealer/retailer authorised by the company with original tax invoice.
                        </p>
                    </li>
                </ol>
                <p>
                    The warranty will be considered null and void if during the investigation company identifies the product 
                    has been mishandled or not installed as per the company-prescribed Do’s and Don’ts during the warranty period. 
                    Under no circumstances shall coverage get extended to any loss or damage to a person or pro
                </p>
                <h5 style={{color:'red'}}>Other excluded situations</h5>
                <p>
                    This limited warranty DOES NOT APPLY in the event of:
                </p>
                <ul className="other-exclusion-list">
                    <li>
                        <p>Bends less than 4T for all sheet thickness</p>
                    </li>
                    <li>
                        <p>
                            Slopes of the roof or sections of the roof should not more than 75° from the vertical.
                        </p>
                    </li>
                    <li>
                        <p>
                            Mechanical chemical or other damage sustained during shipment, storage, forming fabrication
                            or during or after erection and installation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Forming which incorporates severe reverse bending or which subjects coating to alternate compression and tension.
                        </p>
                    </li>
                    <li>
                        <p>
                            Failure to Provide free drainage of water, including internal condensation, from overlaps on all other surfaces
                            of the sheets or panels.
                        </p>
                    </li>
                    <li>
                        <p>
                            Failure to remove debris from overlaps and all other surfaces of the sheets or panels.
                        </p>
                    </li>
                    <li>
                        <p>
                            Damage caused to the metallic coating by improper roll forming, scouring or cleaning procedures.
                        </p>
                    </li>
                    <li>
                        <p>
                            Deterioration of the panels caused by contact with green or wet lumber or wet storage stain caused by water damage or condensation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Presence of damp insulation or other corrosive Product in contact with or close proximity to the panel.
                        </p>
                    </li>
                    <li>
                        <p>
                            Warranty will not apply to Product stored or installed in a way which allows contact with animal and / or animal waste or its decomposed Product.
                        </p>
                    </li>
                    <li>
                        <p>
                            This warranty will not apply to the defects caused by water infiltration due to improper packaging.
                        </p>
                    </li>
                    <li>
                        <p>
                            This warranty is not valid when there is an exposure in abnormal conditions (aggressive or pollute)
                            such as humid area, tropical area, the place within one-mile distance from the seashore, the vicinity
                            of chemical or iron industries, etc.
                        </p>
                    </li>
                    <li>
                        <p>
                            This warranty shall not be applied to the damage or failure which is occurring from accident, natural disaster,
                            fire, flood, explosion, falling stone, acts of warriots or due to any other force majeure conditions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Improper handling and storage of the Product or misuse, willful default, gross negligence of Buyer.
                        </p>
                    </li>
                    <li>
                        <p>
                            Warranty can be claimed only by submitting the original warranty card with the date of purchase,
                            signature and stamp of the authorized retailer/distributor appointed by the company with the original tax invoice.
                        </p>
                    </li>
                    <li>
                        <p>
                            The warranty will be considered null and void if during the investigation company identifies the Product has
                            been mishandled or not installed as per the company-prescribed Do’s and Don’ts during the warranty period.
                            Under no circumstances shall coverage get extended to any loss or damage to a person or property for any incidental,
                            contingent, special or consequential damage.
                        </p>
                    </li>
                </ul>
                <h5 style={{color:"red"}}>Do’s and Don’ts:</h5>
                <table style={{width:"100%"}}>
                    <thead>
                        <tr style={{textAlign:"center"}}>
                            <th>DO's</th>
                            <th>DON’TS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Use PPE while handling & installing</td>
                            <td>Product should not come in contact with wet surface</td>
                        </tr>
                        <tr>
                            <td>Keep Product in flat, dry & ventilated areas</td>
                            <td>Product should not come in contact with cement</td>
                        </tr>
                        <tr>
                            <td>The Product must be lifted with Nylon ropes</td>
                            <td>Product should not come in contact with metal filings</td>
                        </tr>
                        <tr>
                            <td>Ensure zero water seepage during storage</td>
                            <td>Product should not be kept on floor directly</td>
                        </tr>
                        <tr>
                            <td>Avoid metal to metal contact</td>
                            <td>Do not allow dirt to be accumulated on Product</td>
                        </tr>
                        <tr>
                            <td>Good quality fasteners to be used</td>
                            <td>Do not slide sheets on rough surface</td>
                        </tr>
                    </tbody>
                </table>
                <h5 style={{color:"red"}}>Disclaimer of other warranties</h5>
                <p>
                    Except as expressly set forth in this Warranty Certificate, Company disclaims,
                    and Buyer waives, any and all other warranties, whether express or implied, oral
                    or written, including without limitation, any implied warranties of merchantability
                    or fitness for a particular purpose.
                </p>
                <h5 style={{color:"red"}}>Limitation of remedies and liability:</h5>
                <p>
                    The parties agree that the Buyer’s sole and exclusive remedy against the Company shall be for the repair
                    or replacement of the defective portion of the warranted Product. The buyer agrees that no other remedy
                    or liability (including, but not limited to, indirect, special, punitive, loss of use, business, profits,
                    sales, injury to person or property, or any other incidental or consequential loss or damages) shall be
                    available to the Buyer and is hereby deemed to be expressly waived and excluded. The maximum liability of
                    the Company in any circumstance, shall not exceed the invoice value of the Product. All costs with respect
                    to dismantling, installation, reinstallation, transportation shall be solely on account of Buyer and the Company
                    shall not be responsible for the same.
                </p>
                <h5 style={{color:"red"}}>Claims:</h5>
                <p>
                    In the event of any claim under this limited warranty, Buyer must demonstrate
                    to the Company’s satisfaction that the failure was due to a breach of this limited warranty.
                    Buyer has the responsibility to provide written notice containing particulars sufficient to
                    identify the Buyer and all reasonably obtainable information with respect to the time, place
                    and circumstance, including a video and/or photographs of the claimed Perforation due to any
                    manufacturing defects for the Company’s inspection. Such records shall at a minimum include the
                    date of purchase, the place of purchase, dealer / distributor details and the Company’s invoice
                    or any other information reasonably required by the Company. The Buyer will arrange for the Company
                    or any agency appointed by the Company to have, during normal business hours, complete access to the
                    Product and shall be responsible to make available the Product for inspection or survey to determine
                    the actual root cause of Perforation.
                </p>
                <p style={{marginTop:"5px"}}>
                    The Buyer shall further provide access to the Company to any information and personnel having knowledge
                    of or information pertaining to the claims under this Limited Warranty. It is a primary condition to any
                    obligation of the Company under this limited warranty that the Buyer shall have fully paid the agreed 
                    contract price and invoice value including tax for the Product sold by the Company to Buyer. Subject
                    to strict compliance of the above conditions, the Company shall repair or replace the Product within Ninety
                    (90) days of receiving all information, documents from the Buyer and inspection of Product to determine root
                    cause is completed by the Company. In the event of any repair or replacement by the Company of the Product,
                    the warranty shall stand extinguished and cancelled. The decision of the Company shall be final and binding
                    on the Buyer
                </p>
                <h5 style={{color:"red"}}>Entire understanding:</h5>
                <p>
                    Any and all representations, promises, warranties or statements by the Company’s agents
                    or personnel that varies, conflicts, contradicts or inconsistent in any way from the terms
                    of written limited warranty stipulated hereunder, shall be given no force or effect and shall
                    be deemed null and void. Any such representations, promises, warranties or statements do not
                    constitute warranties, shall not be relied upon by the buyer and are not part of this limited
                    warranty or of the contract for sale of the Product between the Company and buyer. This limited
                    warranty shall be deemed to be a part of the contract of sale between the Company and buyer for
                    the Product sold by the Company to the buyer. The entire agreement and understanding between the
                    Company and the buyer with respect to Product is embodied in this writing. This writing constitutes
                    the final expression of the parties’ agreement with respect to warranties and is a complete and exclusive
                    statement of the terms of that agreement.
                </p>
                <h5 style={{color:"red"}}>Warranty not transferable:</h5>
                <p>
                    This Limited Warranty is issued only to the original Buyer and is nontransferable and/or non-assignable.
                    Should the Buyer become insolvent, bankrupt, make an assignment for the benefit of its creditors, or for
                    any reason discontinue its normal or regular business practices, this warranty shall forthwith become null
                    and void and have no legal effect.
                </p>
                <h5 style={{color:"red"}}>Non waiver:</h5>
                <p>
                    In any instance or series of instances, the determination of the Company not to exercise any right
                    hereunder or not to require compliance with any term or condition hereof, shall not constitute a 
                    waiver of the Company’s rights to exercise all rights and to require compliance with all terms and
                    conditions herein on all occasions prior and subsequent to such instance or instances, and no such 
                    determination or Series of determinations by the Company shall constitute an alteration or waiver of
                    the rights of the Company and Buyer as otherwise set forth herein.
                </p>
                <h5 style={{color:"red"}}>Governing law and jurisdiction:</h5>
                <p>
                    The rights and obligations of the Company and Buyer hereunder shall be construed and governed by the laws of India,
                    without giving effect to conflict of law principles and the Parties agree to submit to the exclusive jurisdiction of
                    the appropriate courts at Guwahati, Assam(India).
                </p>
                
                <p style={{textAlign:"center", marginTop:"50px"}}>xxx End of Terms And Conditions xxx</p>
            </div>
        </>

    )
}

export default TermsAndConditions;