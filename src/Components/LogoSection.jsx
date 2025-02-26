import coinbase from '../assets/coinbase.png';
import Spotify from '../assets/Spotify_logo_with_text.svg.webp';
import Slack from '../assets/Slack_Technologies_Logo.svg.png';
import Dropbox from '../assets/dropbox.png';
import Webflow from '../assets/webflow.png';
import Zoom from '../assets/Zoom-Logo.png';

export default function LogoSection() {
  return (
    <div className="w-full py-12 bg-white flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-12">
        {/* Logos */}
        <img src={coinbase} alt="Coinbase" className="h-12 object-contain" />
        <img src={Spotify} alt="Spotify" className="h-12 object-contain" />
        <img src={Slack} alt="Slack" className="h-12 object-contain" />
        <img src={Dropbox} alt="Dropbox" className="h-12 object-contain" />
        <img src={Webflow} alt="Webflow" className="h-12 object-contain" />
        <img src={Zoom} alt="Zoom" className="h-12 object-contain" />
      </div>
    </div>
  );
}
