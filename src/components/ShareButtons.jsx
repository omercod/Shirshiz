import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  PinterestIcon,
  XIcon,
} from "react-share";
import PropTypes from "prop-types";

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  media: PropTypes.string,
};

export default function ShareButtons({ url, title, media }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={50} round />
      </FacebookShareButton>

      <WhatsappShareButton url={url} title={title} separator=" ">
        <WhatsappIcon size={50} round />
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={50} round />
      </TelegramShareButton>

      <TwitterShareButton url={url} title={title}>
        <XIcon size={50} round />
      </TwitterShareButton>

      <PinterestShareButton url={url} media={media}>
        <PinterestIcon size={50} round />
      </PinterestShareButton>
    </div>
  );
}
