import './App.css'
import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import {india} from './assets/india';
import {bhutan} from './assets/bhutan';
import { useState } from 'react';

function App() {

  const [getSelectedCountry, setCountry] = useState('');
  const [allStates, setStates] = useState('');
  const [allDistricts, setAllDistricts] = useState('');
  

  const getCountry = (event) => {
    setCountry(event.target.value);
    getStatesOfTheCountry(event.target.value);
  }

  const getStatesOfTheCountry = (country) =>{
    let states;
    if(country == 'india'){
       states = Object.keys(india);
    }else{
      states = Object.keys(bhutan);
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

  return (
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
          <p className='mt-4' style={{fontSize:'15px', fontWeight:400}}><a href='#' style={{textDecoration:'none', color:'white', textShadow: '5px 10px 20px #3b3b3b'}}>Explore Dynaroof <FaLongArrowAltRight style={{marginLeft:'10px', fontSize:'15px'}} /></a></p>
        </div>
        <img src='/assets/side-banner.jpg' className='side-banner-image' alt='side-banner' />
      </div>
      <div className='warranty-form-div'>
        <h4>Customer Warranty Registration Form</h4>
        <form>
          <input type='text' name='full-name' className='form-control' placeholder='Full Name' />
          <input type='email' name='email' className='form-control' placeholder='Email Address' />
          <input type='text' name='phone-number' className='form-control' placeholder='Phone Number' />
          
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <input type='text' className='form-control' name='dealer-name' placeholder='Dealer Name' />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <select name='material-type' className='form-control'>
                <option value='' disabled selected hidden>Select Material Type</option>
                <option value='Super Pro'>Super Pro (20 Years)</option>
                <option value='Pro'>Pro (10 Years)</option>
              </select>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <input type='date' className='form-control' placeholder='Date of Purchase :' />
            </div>
          
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <select value={getSelectedCountry} name='country' className='form-control' onChange={getCountry}>
                <option value='' disabled selected hidden>Select Country</option>
                <option value='india'>India</option>
                <option value='bhutan'>Bhutan</option>
              </select>
            </div>
            {
              getSelectedCountry == 'bhutan' ? 
              <div className='col-lg-8 col-md-6 col-sm-6'>
                <select name='district' className='form-control'>
                  <option value='' disabled selected hidden>Select District</option>
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
                  <select name='state' className='form-control' onChange={getSelectedState}>
                    <option value='' disabled selected hidden>Select State</option>
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
                  <select name='district' className='form-control' onChange={getDistrictsOfStates}>

                    <option value='' disabled selected hidden>Select District</option>
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
              <input type='text' className='form-control' name='color-of-sheets' placeholder='Color of Sheets' /> 
            </div>
            <div className='col-md-6'>
              <input type='number' className='form-control' name='number-of-sheets' placeholder='Number of Sheets' min={0}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className="input-group">
                <input type='text' className='form-control' name='serial-number' placeholder='Serial Number' />
                <span className="input-group-text"><IoMdInformationCircle /></span>
              </div>
            </div>
            <div className='col-md-6'>
              <input type='number' className='form-control' name='thickness-of-sheets' placeholder='Thickness of Sheets (mm)' min={0}/>
            </div>
          </div>
          <div className='upload-div'>
            <div className='upload-div-header'>
              <h6>Upload Invoice</h6>
              <p>( Accepted file types: pdf, docx. Max file size: 2MB)</p>
            </div>
            <input type='file' name='invoice' className='form-control' />
          </div>
          <div className='terms-condition'>
            <input type='checkbox' name='terms-condition' />
            <p>I accept <a href='#'>Terms & Conditions</a></p>
          </div>
          <div className='submit-button'>
            <input type='button' className='btn btn-md btn-success' name='Submit' value='Submit'/>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default App
