import React, {useState} from 'react'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Team from './Team'
import OurPartners from './OurPartners'
import Popi from './Popi'
import FuneralInsurance from './FuneralInsurance'
import emailjs from '@emailjs/browser';


const HealthInsurance = () => {

    const [path, setPath]= useState('')
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [phone, setPhone]= useState('')
    const [clientStatus, setClientStatus]= useState('')
    const [subject, setSubject]= useState('')
    const [message, setMessage]= useState('')
    const [sending, setSending]= useState(false)


    function sendEmail(e){
        e.preventDefault();
        setSending(true)
        // emailjs.sendForm('service_vnk6qr9', 'template_z8d2yyo', e.target, 'Uef210SDrpG6qGu_F')
        emailjs.send("service_vnk6qr9","template_z8d2yyo",{
            email: email,
            to_name: "Health iAccess",
            from_name: name,
            message: `Message from:${name}\n Email address:${email}\n Phone number: ${phone}\n Client status: ${clientStatus}\n Subject: ${subject}\n Message: ${message}\n`,            }, "Uef210SDrpG6qGu_F");

        setSending(false)
    }

    if (path==='About'){
      return <AboutUs/>
     } else if(path==='Contact'){
          return <ContactUs/>
     } else if(path==='Team'){
          return <Team/>
     } else if(path==='Partners'){
          return <OurPartners/>
     } else if(path==='Health'){
          return <HealthInsurance/>
     } else if(path==='Popi'){
          return <Popi/>
     } else if(path==='Funeral'){
          return <FuneralInsurance/>
    } else{

  return (
    <>
    
    <div>



<div id="page" className="page">




    <header id="header" className="header">


        <div className="wsmobileheader clearfix">
            <a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
            <span className="smllogo"><img src="images/logo.png" width="180" height="40" alt="mobile-logo"/></span>
                <a href="https://api.whatsapp.com/send?phone=27822891681"><i className="fab fa-whatsapp"></i></a>
         </div>


         <div className="headtoppart bg-lightgrey">
            <div className="headerwp clearfix">


                 <div className="headertopleft">
                    <div className="address clearfix"><a href="https://api.whatsapp.com/send?phone=27822891681"><i className="fab fa-whatsapp"></i>+27 82 289 1681 - We will gladly assist you via WhatsApp</a>
                    </div>
                 </div>


                <div className="headertopright">
                    <a className="linkedinicon" title="Linkedin" href="#"><i className="fab fa-linkedin-in"></i> <span className="mobiletext02">Linkedin</span></a>
                    <a className="facebookicon" title="Facebook" href="#"><i className="fab fa-facebook-f"></i> <span className="mobiletext02">Facebook</span></a>
                  </div>

            </div>
          </div>


          <div className="wsmainfull menu clearfix">
            <div className="wsmainwp clearfix">

                <div className="desktoplogo"><a href="index.html"><img src="images/logo.png"  width="180" height="40" alt="header-logo"/></a></div>


                    <nav className="wsmenu clearfix">
                        <ul className="wsmenu-list">





                                <li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('Home')}><a  >Home </a></li>


                                <li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('About')}><a  >About Us </a></li>


                                <li aria-haspopup="true"><a href="#">Products <span className="wsarrow"></span></a>
                                        <ul className="sub-menu">
                                            <li aria-haspopup="true"><a href="funeral-insurance.html">Funeral Insurance</a></li>
                                                <li aria-haspopup="true"><a href="health-insurance.html">Health Insurance</a></li>
                                                <li aria-haspopup="true"><a href="#">Legal Insurance</a></li>
                                        </ul>
                                    </li>


                                <li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('Partners')}><a  >Our Partners </a></li>


                                <li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('Claim')}><a  >Claim </a></li>


                                <li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('Contact')}><a  >Contact </a></li>


                                <li aria-haspopup="true"><a href="#">Login <span className="wsarrow"></span></a>
                                        <ul className="sub-menu">
                                            <li aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/plexi/r/agent-portal/login_desktop/" target="_blank">Business Owner</a></li>
                                            <li aria-haspopup="true"><a href="#">Policyholder</a></li>
                                            <li aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/f?p=222:LOGIN_DESKTOP" target="_blank">Admin</a></li>
                                        </ul>
                                    </li>

                                    <li className="nl-simple header-btn" aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/plexi/r/agent-portal/login_desktop/" target="_blank">Biz Owner SignUp</a></li>

                        </ul>
                    </nav>

            </div>
        </div>
    </header>


    <div id="breadcrumb" className="division">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className=" breadcrumb-holder">

                        <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Products</li>
                                <li className="breadcrumb-item active" aria-current="page">Health Insurance</li>
                              </ol>
                        </nav>

                        <h4 className="h4-sm steelblue-color">Health Insurance</h4>

                    </div>
                </div>
            </div>
        </div>
    </div>




    <section id="about-5" className="bg-lightgrey pt-100 about-section division">
        <div className="container">
            <div className="row d-flex align-items-center">


                <div className="col-lg-6">
                    <div className="about-img text-center wow fadeInUp" data-wow-delay="0.6s">
                        <img className="img-fluid" src="images/health_family.png" alt="health insurance"/>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">

                         <span className="section-id blue-color">Health Insurance</span>

                        <h3 className="h3-md steelblue-color">For You, Family and/or Extended Family</h3>

                        <p>Our health plans are administered by Day1 Health. The plans which we offer are comprehensive day-to-day and private hospital benefits at extremely affordable prices and is dual regulated by the Council for Medical Schemes and the Financial Services Conduct Authority.
                        </p>

                        <p>When you're looking for private health insurance, it's a good idea to take a look at all the angles. You want health cover that complements your lifestyle and helps you get the best care possible compatible with your financial needs.
                        </p>

                        <p>Get an instant quote on our home page.
                        </p>


                        <div className="row">


                            <div className="col-md-6">
                                <div className="sbox-4 wow fadeInUp" data-wow-delay="0.4s">

                                    <img className="img-fluid" src="images/day1_partner.png" alt="day1 partner" />

                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>




    <section id="pricing-2" className="wide-60 pricing-section division">
        <div className="container">


            <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title">

                    <h3 className="h3-md steelblue-color">Affordable Funeral Cover for Your Family</h3>

                    <p>We understand that losing a loved one is difficult for those left behind, and the last thing you want, is for your family to worry about the funeral costs.
                    </p>

                </div>
            </div>


            <div className="row pricing-row">


                <div className="col-lg-12">

                    <h5 className="h5-md steelblue-color">Value Plus Comprehensive</h5>
                    <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                    <p>Unlimited Doctor Visits etc. | Private Hospital Benefits | Illness | Accident | Ambulance</p>

                    <div className="pricing-table mb-40">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                      <th scope="col">PLANS</th>
                                      <th scope="col">PREMIUM</th>
                                      <th scope="col">PLANS</th>
                                            <th scope="col">PREMIUM</th>
                                </tr>
                            </thead>
                            
                                <tr>
                                      <th scope="row">SINGLE MEMBER</th>
                                     <td>R 565</td>
                                  <th>MEMBER + 1 CHILD</th>
                                        <td>R 791</td>
                                </tr>
                                <tr>
                                      <th scope="row">MEMBER + 2 CHILDREN</th>
                                            <td>R 1 017</td>
                                      <th>MEMBER + 3 CHILDREN</th>
                                            <td>R 1 243</td>
                                </tr>
                                <tr>
                                      <th scope="row">MEMBER + 4 CHILDREN</th>
                                      <td>R 1 469</td>
                                      <th>COUPLE</th>
                                            <td>R 947</td>
                                    <tr>
                                         <th scope="row">COUPLE + 1 CHILD</th>
                                         <td>R 1 173</td>
                                         <th>COUPLE + 2 CHILDREN</th>
                                             <td>R 1 399</td>
                                    <tr className="last-tr">
                                                <th scope="row">COUPLE + 3 CHILDREN</th>
                                                <td>R 1 625</td>
                                                <th>COUPLE + 4 CHILDREN</th>
                                                <td>R 1 851</td>
                                </tr>
                                </tr>
                                </tr>
                           
                        </table>
                    </div>
                </div>





            </div>

            <div className="row pricing-row">


                <div className="col-lg-12">

                    <h5 className="h5-md steelblue-color">Platinum Plan Comprehensive</h5>
                    <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                    <p>Unlimited Doctor Visits etc. | Private Hospital Benefits | Illness | Accident | Critical Illness | Ambulance</p>

                    <div className="pricing-table mb-40">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                      <th scope="col">PLANS</th>
                                      <th scope="col">PREMIUM</th>
                                      <th scope="col">PLANS</th>
                                            <th scope="col">PREMIUM</th>
                                </tr>
                            </thead>
                            
                                <tr>
                                      <th scope="row">SINGLE MEMBER</th>
                                     <td>R 855</td>
                                  <th>MEMBER + 1 CHILD</th>
                                        <td>R 1 112</td>
                                </tr>
                                <tr>
                                      <th scope="row">MEMBER + 2 CHILDREN</th>
                                            <td>R 1 369</td>
                                      <th>MEMBER + 3 CHILDREN</th>
                                            <td>R 1 626</td>
                                </tr>
                                <tr>
                                      <th scope="row">MEMBER + 4 CHILDREN</th>
                                      <td>R 1 883</td>
                                      <th>COUPLE</th>
                                            <td>R 1 539</td>
                                    <tr>
                                         <th scope="row">COUPLE + 1 CHILD</th>
                                         <td>R 1 796</td>
                                         <th>COUPLE + 2 CHILDREN</th>
                                             <td>R 2 053</td>
                                    <tr className="last-tr">
                                                <th scope="row">COUPLE + 3 CHILDREN</th>
                                                <td>R 2 310</td>
                                                <th>COUPLE + 4 CHILDREN</th>
                                                <td>R 2 567</td>
                                    </tr>
                                    </tr>

                            </tr>
                        </table>
                    </div>
                </div>





            </div>

            <div className="row pricing-row">


                <div className="col-lg-12">

                    <h5 className="h5-md steelblue-color">Executive  Plan Comprehensive</h5>
                    <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                    <p>Unlimited Doctor Visits etc. | Private Hospital Benefits | Illness | Illness Top-Up | Accident | Critical Illness | Ambulance</p>

                    <div className="pricing-table mb-40">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                      <th scope="col">PLANS</th>
                                      <th scope="col">PREMIUM</th>
                                      <th scope="col">PLANS</th>
                                            <th scope="col">PREMIUM</th>
                                </tr>
                            </thead>
                           
                                <tr>
                                      <th scope="row">SINGLE MEMBER</th>
                                     <td>R 935</td>
                                  <th>MEMBER + 1 CHILD</th>
                                        <td>R 1 263</td>
                                </tr>
                                <tr>
                                      <th scope="row">MEMBER + 2 CHILDREN</th>
                                            <td>R 1 591</td>
                                      <th>MEMBER + 3 CHILDREN</th>
                                            <td>R 1 919</td>
                                </tr>
                                <tr>
                                      <th scope="row">MEMBER + 4 CHILDREN</th>
                                      <td>R 2 247</td>
                                      <th>COUPLE</th>
                                            <td>R 1 598</td>
                                    <tr>
                                         <th scope="row">COUPLE + 1 CHILD</th>
                                         <td>R 1 926</td>
                                         <th>COUPLE + 2 CHILDREN</th>
                                             <td>R 2 254</td>
                                    <tr className="last-tr">
                                                <th scope="row">COUPLE + 3 CHILDREN</th>
                                                <td>R 2 582</td>
                                                <th>COUPLE + 4 CHILDREN</th>
                                                <td>R 2 910</td>
                        </tr>
                        </tr>
                        </tr>
                            </table>
                  
                    </div>
                </div>





            </div>

            <div className="row pricing-row">

                <div className="col-lg-12">

                        <h5 className="h5-md steelblue-color">Value Plus Comprehensive | Senior</h5>
                        <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                        <p>Unlimited Doctor Visits etc. | Private Hospital Benefits | Illness | Accident | Ambulance</p>

                        <div className="pricing-table mb-40">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                          <th scope="col">PLANS</th>
                                          <th scope="col">PREMIUM</th>
                                          <th scope="col">PLANS</th>
                                                <th scope="col">PREMIUM</th>
                                    </tr>
                                </thead>
                                
                                        <tr className="last-tr">
                                                    <th scope="row">SINGLE MEMBER</th>
                                                    <td>R 775</td>
                                                    <th>COUPLE</th>
                                                    <td>R 1 550</td>
                                                    </tr>

                               
                            </table>
                        </div>
                    </div>





                </div>

            <div className="row pricing-row">


                <div className="col-lg-12">

                    <h5 className="h5-md steelblue-color">Hospital Plans | Value Plus Hospital </h5>
                    <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                    <p>Private Hospital Benefits | Illness | Accident | Ambulance</p>
                    <div className="pricing-table mb-40">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                      <th scope="col">PLANS</th>
                                      <th scope="col">PREMIUM</th>
                                      <th scope="col">PLANS</th>
                                            <th scope="col">PREMIUM</th>
                                </tr>
                            </thead>
                            
                                <tr>
                                      <th scope="row">SINGLE MEMBER</th>
                                     <td>R 345</td>
                                  <th>MEMBER + 1 CHILD</th>
                                        <td>R 552</td>
                                </tr>
                                <tr>
                                      <th scope="row">MEMBER + 2 CHILDREN</th>
                                            <td>R 759</td>
                                      <th>MEMBER + 3 CHILDREN</th>
                                            <td>R 966</td>
                                </tr>
                                <tr>
                                      <th scope="row">MEMBER + 4 CHILDREN</th>
                                      <td>R 1 173</td>
                                      <th>COUPLE</th>
                                            <td>R 5 69</td>
                                    <tr>
                                         <th scope="row">COUPLE + 1 CHILD</th>
                                         <td>R 776</td>
                                         <th>COUPLE + 2 CHILDREN</th>
                                             <td>R 983</td>
                                    <tr className="last-tr">
                                                <th scope="row">COUPLE + 3 CHILDREN</th>
                                                <td>R 1 190</td>
                                                <th>COUPLE + 4 CHILDREN</th>
                                                <td>R 1 397</td>
                                                </tr>
                                                </tr>

                        </tr>
                        </table>
                    </div>
                </div>





            </div>

            <div className="row pricing-row">
                <div className="col-lg-12">

                        <h5 className="h5-md steelblue-color">Value Plus Hospital | Senior</h5>
                        <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                        <p>Private Hospital Benefits | Illness | Accident | Ambulance</p>

                        <div className="pricing-table mb-40">
                            <table className="table table-hover">
                                <thead>
                                        <tr>
                                                <th scope="col">PLANS</th>
                                                <th scope="col">PREMIUM</th>
                                                <th scope="col">PLANS</th>
                                                <th scope="col">PREMIUM</th>
                                        </tr>
                                </thead>
                                
                                        <tr className="last-tr">
                                                    <th scope="row">SINGLE MEMBER</th>
                                                    <td>R 545</td>
                                                    <th>COUPLE</th>
                                                    <td>R 1 090</td>
                                        </tr>
                                        </table>
                               
                          
                        </div>
                    </div>





                </div>

                <div className="row pricing-row">


                    <div className="col-lg-12">

                        <h5 className="h5-md steelblue-color">Platinum Plan Hospital</h5>
                        <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                        <p>Private Hospital Benefits | Illness | Accident | Critical Illness | Ambulance</p>

                        <div className="pricing-table mb-40">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                          <th scope="col">PLANS</th>
                                          <th scope="col">PREMIUM</th>
                                          <th scope="col">PLANS</th>
                                                <th scope="col">PREMIUM</th>
                                    </tr>
                                </thead>
                               
                                    <tr>
                                          <th scope="row">SINGLE MEMBER</th>
                                         <td>R 530</td>
                                      <th>MEMBER + 1 CHILD</th>
                                            <td>R 689</td>
                                    </tr>
                                    <tr>
                                          <th scope="row">MEMBER + 2 CHILDREN</th>
                                                <td>R 848</td>
                                          <th>MEMBER + 3 CHILDREN</th>
                                                <td>R 1 007</td>
                                    </tr>
                                    <tr>
                                          <th scope="row">MEMBER + 4 CHILDREN</th>
                                          <td>R 1 166</td>
                                          <th>COUPLE</th>
                                                <td>R 954</td>
                                        <tr>
                                             <th scope="row">COUPLE + 1 CHILD</th>
                                             <td>R 1 113</td>
                                             <th>COUPLE + 2 CHILDREN</th>
                                                 <td>R 1 272</td>
                                        <tr className="last-tr">
                                                    <th scope="row">COUPLE + 3 CHILDREN</th>
                                                    <td>R 1 431</td>
                                                    <th>COUPLE + 4 CHILDREN</th>
                                                    <td>R 1 590</td>
                        </tr>
                                </tr>
                                </tr>
                            </table>
                        </div>
                    </div>





                </div>

                <div className="row pricing-row">


                    <div className="col-lg-12">

                        <h5 className="h5-md steelblue-color">Executive Plan Hospital</h5>
                        <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                        <p>Private Hospital Benefits | Illness | Illness Top-Up | Accident | Critical Illness | Ambulance</p>

                        <div className="pricing-table mb-40">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                          <th scope="col">PLANS</th>
                                          <th scope="col">PREMIUM</th>
                                          <th scope="col">PLANS</th>
                                                <th scope="col">PREMIUM</th>
                                    </tr>
                                </thead>
                               
                                    <tr>
                                          <th scope="row">SINGLE MEMBER</th>
                                         <td>R 610</td>
                                      <th>MEMBER + 1 CHILD</th>
                                            <td>R 793</td>
                                    </tr>
                                    <tr>
                                          <th scope="row">MEMBER + 2 CHILDREN</th>
                                                <td>R 976</td>
                                          <th>MEMBER + 3 CHILDREN</th>
                                                <td>R 1 159</td>
                                    </tr>
                                    <tr>
                                          <th scope="row">MEMBER + 4 CHILDREN</th>
                                          <td>R 1 342</td>
                                          <th>COUPLE</th>
                                                <td>R 1 037</td>
                                        <tr>
                                             <th scope="row">COUPLE + 1 CHILD</th>
                                             <td>R 1 220</td>
                                             <th>COUPLE + 2 CHILDREN</th>
                                                 <td>R 1 403</td>
                                        <tr className="last-tr">
                                                    <th scope="row">COUPLE + 3 CHILDREN</th>
                                                    <td>R 1 586</td>
                                                    <th>COUPLE + 4 CHILDREN</th>
                                                    <td>R 1 769</td>

                               </tr>
                               </tr></tr>
                            </table>
                        </div>
                    </div>





                </div>

                <div className="row pricing-row">


                    <div className="col-lg-12">

                        <h5 className="h5-md steelblue-color">Day to Day Plans</h5>
                        <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                        <p>Unlimited Doctor Visits | Acute/Chronic Medication | Dentistry | Optometry</p>

                        <div className="pricing-table mb-40">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                          <th scope="col">PLANS</th>
                                          <th scope="col">PREMIUM</th>
                                          <th scope="col">PLANS</th>
                                                <th scope="col">PREMIUM</th>
                                    </tr>
                                </thead>
                                
                                    <tr>
                                          <th scope="row">SINGLE MEMBER</th>
                                         <td>R 325</td>
                                      <th>MEMBER + 1 CHILD</th>
                                            <td>R 480</td>
                                    </tr>
                                    <tr>
                                          <th scope="row">MEMBER + 2 CHILDREN</th>
                                                <td>R 635</td>
                                          <th>MEMBER + 3 CHILDREN</th>
                                                <td>R 790</td>
                                    </tr>
                                    <tr>
                                          <th scope="row">MEMBER + 4 CHILDREN</th>
                                          <td>R 945</td>
                                          <th>COUPLE</th>
                                                <td>R 553</td>
                                        <tr>
                                             <th scope="row">COUPLE + 1 CHILD</th>
                                             <td>R 708</td>
                                             <th>COUPLE + 2 CHILDREN</th>
                                                 <td>R 863</td>
                                        <tr className="last-tr">
                                                    <th scope="row">COUPLE + 3 CHILDREN</th>
                                                    <td>R 1 018</td>
                                                    <th>COUPLE + 4 CHILDREN</th>
                                                    <td>R 1 173</td>

                               </tr></tr></tr>
                            </table>
                        </div>
                    </div>





                </div>

                <div className="row pricing-row">
                    <div className="col-lg-12">

                            <h5 className="h5-md steelblue-color">Day to Day | Senior</h5>
                            <h5 className="h5-sm steelblue-color">Key Benefits</h5>
                            <p>Unlimited Doctor Visits | Acute/Chronic Medication | Dentistry | Optometry</p>

                            <div className="pricing-table mb-40">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                              <th scope="col">PLANS</th>
                                              <th scope="col">PREMIUM</th>
                                              <th scope="col">PLANS</th>
                                                    <th scope="col">PREMIUM</th>
                                        </tr>
                                    </thead>
                                    
                                            <tr className="last-tr">
                                                        <th scope="row">SINGLE MEMBER</th>
                                                        <td>R 380</td>
                                                        <th>COUPLE</th>
                                                        <td>R 760</td>

                                    </tr></table>
                               
                            </div>
                        </div>





                    </div>








        </div>


    </section>




    <section id="contacts-1" className="wide-60 contacts-section division">
        <div className="container">


            <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title">

                    <h3 className="h3-md steelblue-color">Have a Question? Get In Touch</h3>

                    <p>Have a question? Want to become a business owner selling our insurance products? Give us a call
                       or send an email to contact the Health iAccess.
                    </p>

                </div>
            </div>


            <div className="row">


                 <div className="col-md-5 col-lg-4">

                     <div className="contact-box mb-40">
                        <h5 className="h5-sm steelblue-color">General Enquiries</h5>
                        <p>22 Sloane Street, Bryanston, 2191</p>
                        <p>Johannesburg, 2191 South Africa</p>
                        <p>Phone: +27(0) 11 516 0503</p>
                        <p>WhatsApp: +27(0) 82 289 1681</p>
                        <p>Email: <a href="mailto:info@healthiaccess.co.za" className="blue-color">info@healthiaccess.co.za</a></p>
                     </div>

                     <div className="contact-box mb-40">
                        <h5 className="h5-sm steelblue-color">Business Owners</h5>
                        <p>22 Sloane Street, Bryanston, 2191</p>
                        <p>Johannesburg, 2191 South Africa</p>
                        <p>Phone: +27(0) 11 516 0503</p>
                        <p>WhatsApp: +27(0) 82 289 1681</p>
                        <p>Email: <a href="mailto:sales@healthiaccess.co.za" className="blue-color">sales@healthiaccess.co.za</a></p>
                     </div>

                     <div className="contact-box mb-40">
                        <h5 className="h5-sm steelblue-color">Working Hours</h5>
                        <p>Monday – Friday 8:00AM to 5:00PM</p>
                     </div>

                </div>


                <div className="col-md-7 col-lg-8">
                     <div className="form-holder mb-40">
                         <form name="contactForm" className="row contact-form">

                            <div id="input-name" className="col-md-12 col-lg-6">
                                <input type="text" name="name" className="form-control name" placeholder="Enter Your Name*" required onChange={(e)=>setName(e.target.value)}/>
                            </div>

                            <div id="input-email" className="col-md-12 col-lg-6">
                                <input type="text" name="email" className="form-control email" placeholder="Enter Your Email*" required onChange={(e)=>setEmail(e.target.value)}/>
                            </div>

                            <div id="input-phone" className="col-md-12 col-lg-6">
                                <input type="tel" name="phone" className="form-control phone" placeholder="Enter Your Phone Number*" required onChange={(e)=>setPhone(e.target.value)}/>
                            </div>

                            <div id="input-patient" className="col-md-12 col-lg-6 input-patient">
                                <select id="inlineFormCustomSelect3" name="patient" className="custom-select patient" onChange={(e)=>setClientStatus(e.target.value)} required>
                                    <option value="">Have You Made Contact Before?*</option>
                                    <option>New Business Owner</option>
                                    <option>New Insurance CLient</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div id="input-subject" className="col-lg-12">
                                <input type="text" name="subject" className="form-control subject" placeholder="Subject*" required onChange={(e)=>setSubject(e.target.value)} />
                            </div>

                            <div id="input-message" className="col-lg-12 input-message">
                                <textarea className="form-control message" name="message" rows="6" placeholder="Your Message ..." required  onChange={(e)=>setMessage(e.target.value)}></textarea>
                            </div>

                            <div className="col-lg-12 mt-15 form-btn">
                                <button type="submit" className="btn btn-blue blue-hover submit" onClick={sendEmail}>Send Your Message</button>
                            </div>

                            <div className="col-lg-12 contact-form-msg text-center">
                                <div className="sending-msg"><span className="loading"></span></div>
                            </div>

                        </form>

                     </div>
                 </div>


             </div>


        </div>
    </section>


    <footer id="footer-1" className="bg-image wide-40 footer division">
        <div className="container">


            <div className="row">


                <div className="col-md-6 col-lg-3">
                    <div className="footer-info mb-40">

                        <img src="images/footer-logo-white.png" width="180" height="40" alt="footer-logo"/>

                        <p className="p-sm mt-20">We are an integrated financial services company. HiA’s mission and vision are rooted in our name of making health and financial services products accessible in the communities we serve.
                        </p>

                        <div className="footer-socials-links mt-20">
                            <ul className="foo-socials text-center clearfix">

                                <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="ico-twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr"></i></a></li>

                            </ul>
                        </div>

                    </div>
                </div>


                <div className="col-md-6 col-lg-3">
                    <div className="footer-box mb-40">

                        <h5 className="h5-xs">Our Location</h5>

                        <p>22 Sloane Street, Bryanston</p>
                        <p>Johannesburg, 2191, South Africa</p>

                        <p className="foo-email mt-20">E: <a href="mailto:info@healthiaccess.co.za">info@healthiaccess.co.za</a></p>

                        <p>P: +27(0) 11 516 0503</p>

                    </div>
                </div>


                <div className="col-md-6 col-lg-3">
                    <div className="footer-box mb-40">

                        <h5 className="h5-xs">Working Hours</h5>

                        <p className="p-sm">Mon - Thur - <span>8:00 AM - 5:00 PM</span></p>
                        <p className="p-sm">Friday - <span>8:00 AM - 5:00 PM</span></p>
                        <p className="p-sm">Sat - Sun - <span>Closed</span></p>

                    </div>
                </div>


                <div className="col-md-6 col-lg-3">
                    <div className="footer-box mb-40">

                        <h5 className="h5-xs">WhatsApp</h5>

                        <h5 className="h5-xl blue-color">+27(0) 82 289 1681</h5>

                        <p className="p-sm mt-15">Contact on this number, always available to assist with information and enquiries.
                        </p>

                        <p className="foo-email mt-20"><a href="popi.html">Privacy Statement</a></p>

                    </div>
                </div>


            </div>


            <div className="bottom-footer">
                <div className="row">
                    <div className="col-md-12">
                        <p className="footer-copyright">&copy; 2022 <span>Health iAccess</span>. All Rights Reserved</p>
                    </div>
                </div>
            </div>


        </div>
    </footer>




</div>
</div>



    
    </>
  )
}
}
export default HealthInsurance


