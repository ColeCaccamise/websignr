import { FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center ">
        <h1 className='text-8xl tracking-widest uppercase mb-7'>websignr</h1>
        <p className='text-xl'>A project by <a className='font-semibold hover:underline' href="https://colecaccamise.com">Cole Caccamise</a>. More info coming later in 2022.</p>
        <div className="flex mt-6 justify-center">
          <a className='text-4xl mr-4 hover:opacity-60' href="mailto:info@websignr.com"><FaEnvelope /></a>
          <a className='text-4xl mr-4 hover:opacity-60' href="http://instagram.com/websignr"><FaInstagram /></a>
          <a className='text-4xl hover:opacity-60' href="http://twitter.com/websignr"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
