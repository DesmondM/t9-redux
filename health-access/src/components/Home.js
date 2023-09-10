import React, {useState} from 'react'
import data from './DataFile.json'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Team from './Team';
import OurPartners from './OurPartners';
import Popi from './Popi';
import FuneralInsurance from './FuneralInsurance';
import HealthInsurance from './HealthInsurance';
import Claim from './Claim';
import emailjs from '@emailjs/browser';


const Home = () => {
    const [formName, setFormName] =useState('')
    const [userValues, setUserValues] = useState({
        plan: "",
        membership: "",
        cover: "",
      });
    ;
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
  
    const handlePremiumInput = (e)=> {
        e.preventDefault();
        setUserValues({
          ...userValues,
          [e.target.name]: e.target.value,
        });
        // console.log(userValues.plan)
        // console.log(userValues.membershipCover)
        // console.log(userValues.Cover)
      };
  const [path, setPath]= useState('')
  if (path==='About'){
    return <AboutUs/>
   } else if(path==='Contact'){
        return <ContactUs/>
   } else if(path==='Team'){
        return <Team/>
   } else if(path==='Partners'){
        return <OurPartners/>
   } else if(path==='Popi'){
   } else if(path==='Health'){
        return <HealthInsurance/>
   } else if(path==='Popi'){
        return <Popi/>
   } else if(path==='Claim'){
        return <Claim/>
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

                                <li className="nl-simple" aria-haspopup="true"><a href="index.html">Home </a></li>

                                <li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('About')}><a  >About Us </a></li>

                                <li aria-haspopup="true"><a href="#">Products <span className="wsarrow"></span></a>
                                        <ul className="sub-menu">
                                                <li aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Funeral')}><a  >Funeral Insurance </a></li>

                                                <li aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Health')}><a  >Health Insurance</a></li>
                                               
                                        </ul>
                                    </li>

                                <li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Partners')}><a  >Our Partners </a></li>


                                <li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Claim')}><a  >Claim </a></li>

                                <li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Contact')}><a  >Contact </a></li>

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


    <section id="hero-4" className="bg-fixed hero-section division">
        <div className="container">
            <div className="row d-flex align-items-center">


                <div className="col-lg-7 col-xl-7">
                    <div className="hero-txt mb-40">

                        <h1 className="steelblue-color">Welcome to</h1>
                        <h1 className="steelblue-color">Health iAccess</h1>


                        <div className="box-list">
                            <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                            <p>An Integrated Financial Services Company.
                            </p>
                        </div>

                        <div className="box-list">
                            <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                            <p>Sign up to become a HiA Business Owner and Earn Unlimited Income.</p>
                        </div>

                        <div className="box-list">
                            <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                            <p>Get an instant quotation for our Insurance Products.
                            </p>
                        </div>

                    </div>
                </div>


                    <div className="col-lg-5 col-xl-5">
                        <div id="hero-section-form" className="text-center mb-40 mt-50">
                            <form name="heroForm" className="row hero-form bg-blue wow fadeInUp" data-wow-delay="0.3s"
                            
                            >

                        <div className="col-md-12 white-color ">
                                    <h4 className="h4-xs">Get a Quote Instantly</h4>
                                </div>

                                <div id="input-product" className="col-md-12 input-product">
                                    <select id="inlineFormCustomSelect2" name="membership" className="custom-select product" required
                                    onChange={handlePremiumInput}>
                                        <option value={"Single Member"}>Cover a single member or couple?</option>
                                                                <option value={"Single Member"}>Single</option>
                                          <option value={"Couple"}>Couple</option>
                                    </select>
                                </div>

                                <div id="input-amount" className="col-md-12 input-amount">
                                    <select id="inlineFormCustomSelect2" name="plan" className="custom-select amount" required
                                    onChange={handlePremiumInput}>
                                
                                        <option value={"Value Plus Comprehensive"}>Select Plan</option>
                                          <option value={"Value Plus Comprehensive"}>Value Plus Comprehensive</option>
                                          <option value={"Platinum Plan Comprehensive"}>Platinum Plan Comprehensive</option>
                                          <option value={"Executive Plan Comprehensive"}>Executive Plan Comprehensive</option>
                                          <option value={"Value Plus Comprehensive | Senior"}>Value Plus Comprehensive | Senior</option>
                                          <option value={"Value Plus Hospital"}>Value Plus Hospital</option>
                                          <option value={"Value Plus Hospital | Senior"}>Value Plus Hospital | Senior</option>
                                          <option value={"Platinum Plan Hospital"}>Platinum Plan Hospital</option>
                                          <option value={"Executive Plan Hospital"}>Executive Plan Hospital</option>
                                          <option value={"Day to Day"}>Day to Day</option>
                                          <option value={"Day to Day | Senior"}>Day to Day | Senior</option>
                                    </select>
                                </div>

                                <div id="input-cover" className="col-md-12 input-cover">
                                    <select id="inlineFormCustomSelect2" name="cover" className="custom-select cover" required
                                     onChange={handlePremiumInput}>
                                    
                                        <option value={"Member Only"}>I want to cover</option>
                                          <option value={"Member Only"}>Member</option>
                                          <option value={"Member + 1 Child"}>Member + 1 Child</option>
                                          <option value={"Member + 2 Children"}>Member + 2 Children</option>
                                          <option value={"Member + 3 Children"}>Member + 3 Children</option>
                                          <option value={"Member + 4 Children"}>Member + 4 Children</option>
                                          <option value={"Couple"}>Couple</option>
                                          <option value={"Couple + 1 Child"}>Couple + 1 Child</option>
                                          <option value={"Couple + 2 Children"}>Couple + 2 Children</option>
                                          <option value={"Couple + 3 Children"}>Couple + 3 Children</option>
                                          <option value={"Couple + 4 Children"}>Couple + 4 Children</option>
                                    </select>
                                </div>


                                <div className="col-lg-12 form-btn">
                                    <button type="submit" className="btn btn-orange tra-white-hover submit">How Much Will I Pay?</button>
                                </div>
                                
                                <div className="col-lg-12 hero-form-msg text-center">
                                    <div className="sending-msg"><span className="loading"></span></div>
                                </div>

                             
                               
                               {data
            .filter(
              (record) =>
                record.membershipCover === `${userValues.membership}` &&
                record.plan === `${userValues.plan}` &&
                record.cover === `${userValues.cover}`
            )
            .map((filteredRecords) => (
              <p style={{color:'#fff',
            
              }}>
                {" "}
                
                <span
                  style={{
                    display: "block",
                    color:'#fff',
                    textAlign:'left',
                    width: "95%",
                    height:'40px',
                    margin: "auto",
                    fontSize: "80px",
                  }}
                >
                 
                 <div style={{display:'flex', flexDirection: 'row', gap:'10px', width:'380px', justifyContent:'center'}}><h2 className="h2-xs" style={{color:'white'}}> {filteredRecords.premium}</h2><span><p style={{ width:'200px', marginRight:'-55px', marginTop:'40px', padding: '0 0 15px 0', float:'center'}}>Per Month</p></span></div>
                </span>
               
                 <button
                  type="submit" className="btn btn-orange tra-white-hover submit"
                  
                  style={{
                    marginTop:'30px', background:'yellow', border: '2px solid yellow'

                  }}
                  
                >
                    {/* <a href='https://dev.zd-solutions.co.za/ords/plexi/plexi/r/forms/hia-new-funeral/'> */}
                    <a href='https://dev.zd-solutions.co.za/ords/plexi/r/hicform/new-value-plan'>

                  Click to Apply
                  </a></button> 
              </p>
            ))}
                               
                            </form>
                        </div>
                    </div>
                </div>


            </div>
       
    </section>	




    <section id="about-4" className="wide-60 about-section division">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <div className="info-4-img text-center wow fadeInUp" data-wow-delay="0.6s">
                                         <img className="img-fluid" src="images/funeral_insurance.jpg" alt="info-image"/>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">

                        <h3 className="h3-md steelblue-color">Want to earn unlimited income?</h3>

                        <p>Everything we do, we do with you in mind as a business owner. Our core principles revolve around your needs to make income. This highly unique organisation-owned structure allows you to benefit from the products that you sell. We’re here to help grow and run your own business by selling insurance products. What we do impacts on the lives and livelihoods of others.
                        </p>

                        <p>For our clients, we have products that suits you, beyond your expectations. Our team has the right expertise to support and educate you through all aspects of your chosen product coupled with a network of specialists and access to insurance policies to match your requirements.
                        </p>

                        <div className="row">

                            <div className="col-xl-6">

                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">Signup or register online now.</p>
                                </div>

                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">Fulfil the requirements.</p>
                                </div>

                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">Start selling insurance products.</p>
                                </div>

                            </div>

                            <div className="col-xl-6">

                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">Earn unlimited income.</p>
                                </div>

                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">Invite others to join.</p>
                                </div>

                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                    <p className="p-sm">Grow your business network.</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>




    <section id="info-4" className="bg-lightgrey wide-60 info-section division">
        <div className="container">
            <div className="row d-flex align-items-center">



                <div className="col-lg-6">
                    <div className="info-4-img mb-40 text-center wow fadeInUp" data-wow-delay="0.6s">
                        <img className="img-fluid" src="images/who_we_are.jpg" alt="info-image"/>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">

                        <h3 className="h3-md steelblue-color"><img className="img-fluid" src="images/signature1.png" width="275" height="105" alt="HiA" />
                            is an Integrated Financial Services Company</h3>

                        <p className="mb-30">We are an integrated financial services company. Health iAccess (HiA) mission and vision are rooted in our name of making health and financial services products accessible in the communities we serve, be it individuals or institutions/groups.
                        </p>

                        <p className="mb-30">We started Health iAccess anchored on providing affordable health care products. To that extent, we have partnered with Day1 Health as primary health care provider. The long-term vision is to provide Health Services in an affordable way, be it personal health and/or  Financial Health. We have included funeral insurance as part of our offerings.
                        </p>

                        <p className="mb-30">By continuously offering a range of products, we make it easy for our customers to fulfill a variety of needs, while providing our business owners with an opportunity to earn across various streams. In essence:
                        </p>



                        <div className="blog-categories sidebar-div mt-10 mb-20">

                            <ul>
                                <li><a><i className="fas fa-angle-double-right blue-color"></i> We partner and source financial services products.</a></li>
                                <li><a><i className="fas fa-angle-double-right blue-color"></i> We distribute innovatively, while driving affordability.</a></li>
                                <li><a><i className="fas fa-angle-double-right blue-color"></i> We make it easy for communities to access our products.</a></li>
                                <li><a><i className="fas fa-angle-double-right blue-color"></i> Technology is at the heart of what we do!</a></li>
                            </ul>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    </section>




    <section id="services-5" className="wide-100 services-section division">
        <div className="container">


            <div className="row">
                <div className="col-lg-10 offset-lg-1 section-title">

                    <h3 className="h3-md steelblue-color">Our Products</h3>

                    <p>We offer a range of financial services products that include primary health insurance and funeral insurance. We continuously engage with other parties to bring more innovative products onto our platform; products that cater for a variety of needs within the insurance and financial services space.
                    </p>

                </div>
            </div>

             <div className="row">


                             <div className="col-lg-4">
                     <div className="blog-post wow fadeInUp" data-wow-delay="0.4s">

                         <div className="blog-post-img">
                            <img className="img-fluid" src="images/funeral_insurance.jpg" alt="funeral insurance" />
                        </div>

                        <div className="blog-post-txt">

                            <h5 className="h5-sm steelblue-color"><a href="single-post.html">Funeral Insurance</a></h5>

                            <p>Funeral Insurance Plan that pays cash at competitive premium. We also have plans that cater for Extended Family Members, be it inlaws or parents.
                            </p>

                        </div>

                    </div>
                 </div>

                         <div className="col-lg-4">
                     <div className="blog-post wow fadeInUp" data-wow-delay="0.6s">

                         <div className="blog-post-img">
                            <img className="img-fluid" src="images/health_insurance.jpg" alt="health insurance" />
                        </div>

                        <div className="blog-post-txt">

                            <h5 className="h5-sm steelblue-color"><a href="single-post.html">Health Insurance</a></h5>

                            <p>(HiA) is accredited to sell primary health insurance products administered Day1 Health. The products covers both day to day doctor visits, private hospitalization and other benefits.
                            </p>

                        </div>

                    </div>
                 </div>

                     <div className="col-lg-4">
                     <div className="blog-post wow fadeInUp" data-wow-delay="0.8s">

                         <div className="blog-post-img">
                            <img className="img-fluid" src="images/legal_insurance.jpg" alt="legal insurance" />
                        </div>

                        <div className="blog-post-txt">

                            <h5 className="h5-sm steelblue-color"><a href="single-post.html">Legal Insurance</a></h5>

                            <p>For a reasonable amount, our legal cover protects you against litigation that includes civil, labour, or criminal matters at a minimum cost. This products is provided through our product partners.
                            </p>

                        </div>

                    </div>
                 </div>

                </div>

            <div className="row">
            </div>

        </div>
    </section>





    <section id="info-6" className="bg-blue info-section division">


        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <div className="info-9-table white-color wow fadeInUp" data-wow-delay="0.4s">


                        <h3 className="h3-md">BECOME an HiA BUSINESS OWNER</h3>

                        <p>You are few steps away becoming your own Boss or starting your own Financial Services Business. HiA has adopted a network marketing model to drive distribution of financial services products. We go to market through HiA appointed Business Owners (BO) who form an integral part of the HiA distribution eco-system. Some of the benefits for our BOs include:
                        </p>

                        <table className="table">
                            <tbody>
                                <tr>
                                      <td>Introduction to financial services.</td>
                                </tr>
                                <tr>
                                      <td>Opportunity to learn and understand primary health, funeral and other insurance products.</td>
                                </tr>
                                    <tr>
                                      <td>Opportunity to grow in a network marketing company with endless income potential.</td>
                                </tr>
                                    <tr>
                                      <td>Opportunity to make an impact in the community.</td>
                                </tr>
                                <tr>
                                      <td>MANAGE YOUR OWN TIME.</td>
                                </tr>
                                <tr>
                                      <td>Earn an income or create an additional income stream.</td>
                                </tr>
                              </tbody>
                        </table>

                        <a href="#" className="btn btn-tra-white blue-hover mb-25 mt-25">Register/Signup</a>




                        <h5 className="h5-sm">Signup now and become a BO today!</h5>



                    </div>
                </div>
            </div>
        </div>

        <div className="info-9-img bg-fixed text-center"></div>

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
                        <p className="footer-copyright">&copy; 2023 <span>Health iAccess</span>. All Rights Reserved</p>
                    </div>
                </div>
            </div>


        </div>
    </footer>


</div>




<script>
    new WOW().init();
</script>


</div>

   
   </>
  )
}
}

export default Home