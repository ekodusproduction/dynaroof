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

    return (
        <>
      <div className='main-block'>
        <div className='side-banner-div'>
          <div className='side-banner-floating-header'>
            <img src='/assets/dynaroof-logo.png' alt='dynaroof-logo' />
            <ul>
              <li><FaFacebook /></li>
              <li><RiInstagramFill/></li>
              <li><FaLinkedin /></li>
              <li><IoLogoYoutube/></li>
            </ul>
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
              <input type='checkbox' name='terms-condition' id="checkTerms" />
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
    </>
    )
}

export default Home