import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-vertical-timeline-component/style.min.css';

// ..

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

class MyApp extends React.Component {

  async componentDidMount() {
    AOS.init();
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}

export default MyApp
