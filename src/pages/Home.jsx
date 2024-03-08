import '../App.css'
import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import {india} from '../assets/india';
import {bhutan} from '../assets/bhutan';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const Home = () => {
    const [getSelectedCountry, setCountry] = useState('');
  const [allStates, setStates] = useState('');
  const [allDistricts, setAllDistricts] = useState('');
  const [getPhone, setPhone] = useState('');
  const [getTimerCount, setTimerCount] = useState(120);

  // const base_url = 'http://127.0.0.1:8000';
  const base_url = 'https://wa-backend.dynaroof.com';
  

  const getCountry = (event) => {
    setCountry(event.target.value);
    getStatesOfTheCountry(event.target.value);
    
  }

  const getStatesOfTheCountry = (country) =>{
    let states;
    if(country == 'india'){
       states = Object.keys(india);
       setAllDistricts([]);
    }else{
      states = Object.keys(bhutan);
      setAllDistricts(bhutan['Bhutan']);
    }
    setStates(states);
    
  }

  const getSelectedState = (event) => {
    let districts;
    if(getSelectedCountry == 'bhutan'){
      districts = bhutan['Bhutan'];
      setAllDistricts(districts);
    }else{
      districts = india[event.target.value];
      setAllDistricts(districts);
    }
    getDistrictsOfStates(event.target.value);
  }

  const getDistrictsOfStates = (district) =>{
  
  }
  const submitRegistrationForm = async (event) =>{
    event.preventDefault();

    let customerSubmitButton = document.getElementById('customer-form-submit-btn');
    customerSubmitButton.disabled = true;
    customerSubmitButton.value = 'Please wait...';

    const terms_and_conditions = document.getElementById('checkTerms')
    if(terms_and_conditions.checked){

      let state;
      if(event.target.state == undefined){
        state =  null;
      }else{
        state = event.target.state.value;
      }


      let formData = new FormData();
      formData.append('fullName', event.target.fullName.value);
      formData.append('email', event.target.email.value);
      formData.append('phone', event.target.phoneNumber.value);
      formData.append('dealerName', event.target.dealerName.value);
      formData.append('materialType', event.target.materialType.value);
      formData.append('dateOfPurchase', event.target.dateOfPurchase.value);
      formData.append('country', event.target.country.value);
      formData.append('district', event.target.district.value);
      formData.append('state', state);
      formData.append('colorOfSheets', event.target.colorOfSheets.value);
      formData.append('numberOfSheets', event.target.numberOfSheets.value);
      formData.append('serialNumber', event.target.serialNumber.value);
      formData.append('thicknessOfSheets', event.target.thicknessOfSheets.value);
      formData.append('invoice', event.target.invoice.files[0]);
      setPhone(event.target.phoneNumber.value);

      try {
        const response = await axios.post(`${base_url}/api/customer-registration`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if(response.data.status == 200 || response.data.type == 'success'){
          const inputs = document.querySelectorAll('.otp-inputs');

          inputs.forEach(function(input, index) {
              input.addEventListener('keyup', function() {
                  if (this.value.length >= 1) {
                      if (index < inputs.length - 1) {
                          inputs[index + 1].focus();
                      }
                  }
              });
      
              input.addEventListener('keydown', function(e) {
                  if (e.key === 'Backspace' && this.value.length === 0) {
                      if (index > 0) {
                          inputs[index - 1].focus();
                      }
                  }
              });
          });


          document.getElementById("otp-model").classList.remove("d-none");
          window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
          
          let count = 120;
          const timer = setInterval(function() {
            count--;
            setTimerCount(count);
            if (count === 0) {
              clearInterval(timer);
              document.getElementById('otpTimer').classList.add('d-none');
              document.getElementById('resendOTP').classList.remove('d-none');
            }
          }, 1000);
          document.getElementById('otpVerifyForm').reset();

          customerSubmitButton.disabled = true;
          customerSubmitButton.value = 'Please wait...';
        }else{
          Swal.fire({
            title: 'Oops! Something went wrong',
            text: response.data.message,
            icon: 'error',
          });

          customerSubmitButton.disabled = false;
          customerSubmitButton.value = 'Submit';
        }
      } catch (error) {
        Swal.fire({
          title: 'Oops! Something went wrong',
          text: error,
          icon: 'error',
        });

        customerSubmitButton.disabled = false;
        customerSubmitButton.value = 'Submit';
      }
    }else{
      Swal.fire({
        title:'Oops!',
        text:'Please accept Terms and Conditions',
        icon:'warning'
      })

      customerSubmitButton.disabled = false;
      customerSubmitButton.value = 'Submit';
    }

    
  }

  const verifyOTPForm = async (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    let entries = Object.fromEntries(formData)
    let phone = entries.phone;
    let otp = entries.otp1+entries.otp2+entries.otp3+entries.otp4+entries.otp5+entries.otp6

    try {
      const response = await axios.post(`${base_url}/api/verify-otp`, {'phone' : phone, 'otp': otp}, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if(response.data.status == 200 || response.data.type == 'success'){
        document.getElementById("otp-model").classList.add("d-none");
        Swal.fire({
          title: 'Great!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
            if(result.isConfirmed){
              document.getElementById('registrationForm').reset();
              document.getElementById('otpVerifyForm').reset();
              setPhone('')
              Swal.fire({
                title:'Great',
                text:"Thank you for applying. You'll get an SMS soon about your warranty card.",
                icon:'success',
                showCloseButton: true,
              })
            }
        });
      }else{
        Swal.fire({
          title: 'Oops! Something went wrong',
          text: response.data.message,
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Oops! Something went wrong',
        text: error,
        icon: 'error',
      });
    }
  }

  const resendOTP = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${base_url}/api/resend-otp`, {'phone' : getPhone,}, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if(response.data.status == 200 || response.data.type == 'success'){
        Swal.fire({
          title: 'Great!',
          text: response.data.message,
          icon: 'success',
         showCloseButton:true
        })

        document.getElementById('otpTimer').classList.add('d-none');
        document.getElementById('resendOTP').classList.add('d-none');
      }else{
        Swal.fire({
          title: 'Oops! Something went wrong',
          text: response.data.message,
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Oops! Something went wrong',
        text: error,
        icon: 'error',
      });
    }

  }

  const showSerialNumberModel = () => {
    document.getElementById("serial-no-model").classList.remove("d-none");
  }
  const closeSerialNumberModel = () => {
    document.getElementById("serial-no-model").classList.add("d-none");
  }

  const acceptTermsViaPopup = () => {
    document.getElementById("terms-model").classList.add("d-none");
    document.getElementById('checkTerms').checked;
  }

  const isCheckBoxChecked = () => {
    const terms_and_conditions = document.getElementById('checkTerms')
    if(terms_and_conditions.checked){
      document.getElementById("terms-model").classList.remove("d-none");
    }
  }

    return (
        <>
      <div className='main-block'>
        <div className='side-banner-div'>
          <div className='side-banner-floating-header'>
            <img src='/assets/dynaroof-logo.png' alt='dynaroof-logo' />
          </div>
          <div className='side-banner-bottom-text'>
            <p><sup><FaQuoteLeft style={{fontSize:'12px'}}/></sup>  BUILD YOUR DREAM PROPERTY</p>
            <h3>WITH NEW EXPERIENCE <sup><FaQuoteRight style={{fontSize:'12px'}}/></sup>  </h3>
            <p className='mt-4' style={{fontSize:'15px', fontWeight:400}}><a href='https://dynaroof.com/' target="_blank" style={{textDecoration:'none', color:'white', textShadow: '0px 5px 10px #d7d6d6'}}>Explore Dynaroof <FaLongArrowAltRight style={{marginLeft:'10px', fontSize:'15px'}} /></a></p>
          </div>
          <img src='/assets/side-banner.jpg' className='side-banner-image' alt='side-banner' />
        </div>
        <div className='warranty-form-div'>
          <h4>Customer Warranty Registration Form</h4>
          <form id="registrationForm" onSubmit={submitRegistrationForm}>
            <label htmlFor="">Full Name <sup style={{color:"red"}}>*</sup></label>
            <input type='text' name='fullName' className='form-control' placeholder='e.g Jhon Doe'  required/>
            <label htmlFor="">Email <sup style={{color:"red"}}>*</sup></label>
            <input type='email' name='email' className='form-control' placeholder='e.g jhondoe@xyz.com'  required/>
            <label htmlFor="">Phone Number <sup style={{color:"red"}}>*</sup></label>
            <input type='text' name='phoneNumber' className='form-control' placeholder='700xxxx854'  required/>
            
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <label htmlFor="">Dealer Name <sup style={{color:"red"}}>*</sup></label>
                <input type='text' className='form-control' name='dealerName' placeholder='Dealer Name'  required/>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <label htmlFor="">Select Material Type <sup style={{color:"red"}}>*</sup></label>
                <select name='materialType' className='form-control' required>
                  <option value='' disabled selected hidden> - Select -</option>
                  <option value='SuperPro(20-Years)'>Super Pro (20 Years)</option>
                  <option value='Pro(10-Years)'>Pro (10 Years)</option>
                </select>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <label htmlFor="">Date of Purchase <sup style={{color:"red"}}>*</sup></label>
                <input type='date' className='form-control'name="dateOfPurchase"  placeholder='Date :'  required/>
              </div>
            
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <label htmlFor="">Country <sup style={{color:"red"}}>*</sup></label>
                <select value={getSelectedCountry} name='country' className='form-control' onChange={getCountry} required>
                  <option value='' disabled selected hidden>Select Country</option>
                  <option value='india'>India</option>
                  <option value='bhutan'>Bhutan</option>
                </select>
              </div>
              {
                getSelectedCountry == 'bhutan' ? 
                <div className='col-lg-8 col-md-6 col-sm-6'>
                  <label htmlFor="">Select District <sup style={{color:"red"}}>*</sup></label>
                  <select name='district' className='form-control' required>
                    <option value='' disabled selected hidden>- Select -</option>
                    {
                      allDistricts.length > 0 ?
                      allDistricts.map( (item, index) => (
                        <option value={item} key={index}>{item}</option>
                      ) ) : 
                      <option value=''>No Districts Selected</option>
                    }
                  </select>
                </div> :

                <>

                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <label htmlFor="">Select State <sup style={{color:"red"}}>*</sup></label>
                    <select name='state' className='form-control' onChange={getSelectedState} required>
                      <option value='' disabled selected hidden>- Select -</option>
                      {
                        allStates.length > 0 ?
                        allStates.map( (item, index) => (
                            <option value={item} key={index}>{item}</option>
                        )) : 
                        <option value=''>No States Selected</option>
                      }
                    </select>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-6'>
                    <label htmlFor="">Select District <sup style={{color:"red"}}>*</sup></label>
                    <select name='district' className='form-control' onChange={getDistrictsOfStates} required>

                      <option value='' disabled selected hidden>- Select -</option>
                      {
                        allDistricts.length > 0 ?
                        allDistricts.map( (item, index) => (
                          <option value={item} key={index}>{item}</option>
                        ) ) : 
                        <option value=''>No Districts Selected</option>
                      }
                    </select>
                  </div>
                </>
                
              }
              
              
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <label htmlFor="">Color of Sheets <sup style={{color:"red"}}>*</sup></label>
                <input type='text' className='form-control' name='colorOfSheets' placeholder='red, green, blue, ...'  required/> 
              </div>
              <div className='col-md-6'>
                <label htmlFor="">Number of Sheets <sup style={{color:"red"}}>*</sup></label>
                <input type='number' className='form-control' name='numberOfSheets' placeholder='1,2,3, ...' min={0} required/>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <label htmlFor="">Serial Number <sup style={{color:"red"}}>*</sup></label>
                <div className="input-group">
                  <input type='text' className='form-control' name='serialNumber' placeholder='Serial Number'  minLength={6} maxLength={6} required/>
                  <span className="input-group-text" onClick={showSerialNumberModel}><IoMdInformationCircle /></span>
                </div>
              </div>
              <div className='col-md-6'>
                <label htmlFor="">Thickness of Sheets <sup style={{color:"red"}}>*</sup></label>
                <input type='text' className='form-control' name='thicknessOfSheets' placeholder='0.35, 0.45, ...' required/>
              </div>
            </div>
            <div className='upload-div'>
              <div className='upload-div-header'>
                <h6>Upload Invoice <sup style={{color:"red"}}>*</sup></h6>
                <p>( Accepted file types: jpg, png, jpeg, pdf, docx. Max file size: 2MB)</p>
              </div>
              <input type='file' name='invoice' className='form-control'  required/>
            </div>
            <div className='terms-condition'>
              <input type='checkbox' name='terms-condition' id="checkTerms" onClick={isCheckBoxChecked}/>
              <p>I accept <Link to='/termsandconditions'>Terms & Conditions</Link></p>
            </div>
            <div className='submit-button'>
              <input type='submit' className='btn btn-md btn-success' id="customer-form-submit-btn" name='Submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>

      <div id="otp-model" className='d-none'>
        <div className="card">
          <div className='card-body'>
            <div className="card-title text-center">
              <p>A six digit OTP has been sent to your phone number. Please verfy by entering OTP</p>
              <h5>Enter OTP</h5>
            </div>
            <form id="otpVerifyForm" onSubmit={verifyOTPForm}>
              <div className="form-group mb-4">
                <input type='hidden' name='phone' className='form-control' placeholder='Email Address' value={getPhone} />
              </div>
              <div className="form-group mb-4 d-flex flex-row justify-content-evenly align-items-center otp-input-box">
                <input type='text' name='otp1' className='form-control otp-inputs' maxLength="1" required/>
                <input type='text' name='otp2' className='form-control otp-inputs' maxLength="1" required/>
                <input type='text' name='otp3' className='form-control otp-inputs' maxLength="1" required/>
                <input type='text' name='otp4' className='form-control otp-inputs' maxLength="1" required/>
                <input type='text' name='otp5' className='form-control otp-inputs' maxLength="1" required/>
                <input type='text' name='otp6' className='form-control otp-inputs' maxLength="1" required/>
              </div>
              <div className='submit-button d-flex flex-row justify-content-between align-items-center'>
                <input type='submit' className='btn btn-md btn-success' name='Submit' value='Verify' />
                <a href="javascript:void(0)" id="otpTimer" >Resend OTP in {getTimerCount} sec</a>
                <a href="#" id="resendOTP" className='d-none' onClick={resendOTP}>Resend OTP</a>
              </div>
            </form> 
          </div>
        </div>
      </div>

      <div id="serial-no-model" className='d-none'>
        <div className="card">
          <div className='card-body'>
            <div className="card-title text-justify">
              <p style={{fontSize:'14px'}}>Please Enter 6 digit product serial number available on the back of your purchased sheet.</p>
              <p style={{fontSize:'12px'}}> <span style={{color:'red'}}>Note:</span> Code shown in the image is an example and not an actual code.</p>
            </div>
            <div>
              <div className="form-group mb-4 d-flex flex-row justify-content-evenly align-items-center">
                <img src='/assets/product-serial-number.png' alt='dynaroof-product serial number'/>
              </div>
              <div className='submit-button d-flex flex-row justify-content-end align-items-center'>
                <input type='button' className='btn btn-md btn-success' name='close' value='Close' onClick={closeSerialNumberModel}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="terms-model" className='d-none'>
        <div className="card">
          <div className="card-header">
            <p>Terms & Conditions</p>
          </div>
          <div className='card-body'>
            <div className="container terms-and-conditions-div" style={{marginTop:'10px'}}>
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
          </div>
          <div className="card-footer">
            <button className='btn btn-success' onClick={acceptTermsViaPopup}>Accept</button>
          </div>
        </div>
      </div>
    </>
    )
}

export default Home