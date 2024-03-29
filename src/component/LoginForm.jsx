import React from 'react';
import steamIcon1 from '../assets/steamIcon1.svg';
import google from '../assets/google.svg';
import '../css/loginForm.scss';

function LoginForm(props) {
  return (
    <div>
      <div className='loginWrapper pt-3'>
        <div className='mb-3'>
          <label className='form-label'>Username / Email</label>
          <input type='text' className='form-control' placeholder='example@gmail.com' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input type='text' className='form-control' placeholder='Enter Password' />
        </div>
        <div className='mb-3'>
          <a href=''>Forgot Password?</a>
        </div>
        <div className='mb-3'>
          <button className={'w-100 btn'}>Log in</button>
        </div>
        {/*<div className={"or d-inline-block"}>*/}
        {/*    Or Continue with*/}
        {/*</div>*/}

        <div className={'or d-flex align-items-center justify-content-center gap-3 mb-3 '}>
          <span className={'text-center'}>Or Continue with</span>
        </div>

        <div className='mb-3 d-flex align-items-center justify-content-center gap-3'>
          <button className={'w-100 btn steam flex-grow-1 d-flex gap-2 justify-content-center'}>
            <img src={steamIcon1} />
            <span>Sign in using steam</span>
          </button>
          <button className={'w-100 btn google flex-grow-1 d-flex gap-2 justify-content-center'}>
            <img src={google} />
            <span>Sign in using google</span>
          </button>
        </div>

        <div className='mt-5 mb-3'>
          <p className={'mb-0'}>By using the site, i attest that i am at least 18 years old and have read the terms & conditions</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
