import '../../../css/fairness.scss';
export function Fairness() {
  return (
    <div>
      <div className='fair'>
        <div className='row mx-0'>
          <div className='col-lg-6 mx-auto'>
            <div className='padding'>
              <div className={'content mb-4'}>
                <h3>PROVABLY FAIR</h3>
                <p>
                  We've implemented the Provably Fair algorithm on our website to uphold verifiability, transparency, and equal randomness
                  for all users. Our commitment revolves around honesty, fairness, and ensuring the integrity of our system. The Provably
                  Fair algorithm hinges on three key parameters: Server Seed, Client Seed, and Nonce. Before each game, results are
                  predetermined. You'll be provided with an encrypted hash of the server seed, and the match between the initial and final
                  hash values serves as proof that our website doesn't tamper with the outcomes. For a deeper understanding of our Provably
                  Fair system, check out the details at the following URL.
                </p>
              </div>
              <div className={'content mb-4'}>
                <h3 className={'text-center mb-0'}>VERIFY</h3>
                <form className='row g-3 align-items-end'>
                  <div className='col-md-12'>
                    <select className='form-select'>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className='col-md-9'>
                    <label className='form-label'>GAME ID</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='col-md-3'>
                    <button className={'btn text-uppercase w-100'}>verify</button>
                  </div>
                  <div className='col-md-6'>
                    <label className='form-label'>CLIENT SEED</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='col-md-6'>
                    <label className='form-label'>KEY</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='col-md-12'>
                    <label className='form-label'>SERVER SEED</label>
                    <input type='text' className='form-control' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
