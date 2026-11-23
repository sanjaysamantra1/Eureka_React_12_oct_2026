import { Link, useNavigate } from 'react-router';

export default function AboutUs() {
  const navigate = useNavigate();

  const doSomethingAndGoToHome = () => {
    console.log('Execute Some Logic....');
    navigate('/home');
  }

  return <>
    <div>AboutUs</div>
    <a href="/home">Go To Home</a>
    <br />
    <Link to="/home">Go To Home</Link>
    <br />
    <button className="btn btn-primary" onClick={doSomethingAndGoToHome}>do Something And Go To Home</button>
    <br/>
    <button onClick={() => navigate(-1)}>Go Back</button>
    <button onClick={() => navigate(1)}>Go Next</button>
  </>
}
