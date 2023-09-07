import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AddLocationAlt, LocationOn } from '@mui/icons-material';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useRef, useState } from 'react';
import HeaderImage from '../components/HeaderImage';
import priceestimateimg from '../assets/priceestimateimg.jpg';
import ToDoComponent from '../components/ToDoComponent';
import Driving from '../assets/Driving.jpg';
import '../components/styles.css';
import ComponentTitle from '../components/ComponentTitle';
import CheckIcon from '@mui/icons-material/Check';
import PaidIcon from '@mui/icons-material/Paid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContactButton from '../components/ContactButton.js';

const word = 'First Things First...'; //coincidence happened lol
const word2 = 'Type Address Below!';

const desc =
  'Get an accurate estimate of our service cost by using our convenient service estimator. Simply enter your address and plan your budget accordingly.';

const center = { lat: 27.97173, lng: -82.42262 };

export default function PriceEstimate() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [map, setMap] = useState(/** @type google.maps.Map*/ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [distanceNumber, setDistanceNumber] = useState(0);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  function distanceToNumber(d) {
    const distanceValue = parseInt(d.replace(/[^\d\.]/g, ''));
    return distanceValue;
  }

  async function calculateRoute() {
    if (destiantionRef.current.value === '') {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: center,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDistanceNumber(
      distanceToNumber(results.routes[0].legs[0].distance.text)
    );
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDistanceNumber(0);
    destiantionRef.current.value = '';
  }

  const icons = {
    icon1: {
      icon: CheckIcon,
      details:
        'Why wait? This manual quote allows you to make an informed decision quickly and efficiently, without the hassle of a phone call!',
    },
    icon2: {
      icon: PaidIcon,
      details:
        'Save money by providing an estimate of the cost upfront, allowing you to plan and budget accordingly, and avoiding any surprise charges later on.',
    },
    icon3: {
      icon: LocalPhoneIcon,
      details:
        'Questions? Contact our customer service team who are ready to provide personalized support and answer any questions you may have.',
    },
  };

  const boxWords = {
    word1: 'FREE SERVICE ESTIMATE',
    word2: 'DOUBLES AS A REBATE!',
    word3: 'Service fees take away from final price!',
  };

  return (
    <div>
      <HeaderImage
        boxWords={boxWords}
        src={priceestimateimg}
        contactButton={ContactButton}
      />
      <ToDoComponent
        word={word}
        src={Driving}
        desc={desc}
        BoxOne={icons.icon1}
        BoxTwo={icons.icon2}
        BoxThree={icons.icon3}
      />
      <ComponentTitle words={word2} />
      <Box
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          borderTop: '3px solid #95242a',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100%',
            width: '100%',
          }}
        >
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
        <Box
          style={{
            padding: '20px',
            height: '15%',
            padding: '10px',
            backgroundColor: '#c1d8de',
            borderLeft: '3px solid #95242a',
            borderRight: '3px solid #95242a',
            borderBottom: '3px solid #95242a',
            borderTop: 'none',
            zIndex: 0,
          }}
        >
          <Box
            style={{
              width: '100%',
              height: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <IconButton
              style={{ backgroundColor: 'white', color: 'red' }}
              onClick={() => map.panTo(center)}
            >
              <LocationOn />
            </IconButton>
            <IconButton
              style={{ backgroundColor: 'white', color: 'red' }}
              onClick={clearRoute}
            >
              <AddLocationAlt />
            </IconButton>
            <Autocomplete>
              <TextField
                type='text'
                placeholder='Destination'
                inputRef={destiantionRef}
                style={{ minWidth: '100px' }}
                variant='outlined'
                size='small'
              />
            </Autocomplete>
            <Button
              style={{ backgroundColor: 'white' }}
              type='submit'
              onClick={calculateRoute}
            >
              Go!
            </Button>
          </Box>

          <Box
            style={{
              width: '100%',
              height: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>
              Estimate Service Cost: ${distanceNumber * 4}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
